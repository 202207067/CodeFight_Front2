# Rocky Build Server - localStorage 흐름 및 데이터 구조

## 1. 개요: localStorage를 쓰는 이유

이 프로젝트는 현재 **서버측 데이터베이스(DB) 없이 프론트엔드(브라우저)에서 주요 상태를 관리**합니다.  
페이지를 새로고침하거나 로비(lobby) → 대기실(room) → 배틀(battle) → 결과(result) 페이지로 이동할 때 데이터를 유지하기 위해 **localStorage**를 활용하고 있습니다.

---

## 2. 주요 localStorage Key 및 역할

시스템 전반에서 사용하는 `localStorage` Key 목록은 다음과 같습니다.

### 2.1 방(Room) 관리
| Key | 용도 | 사용되는 곳 |
|-----|------|------------|
| `dynamicRooms` | 사용자가 생성한 동적 방(커스텀 방) 배열 | lobby, battle, result |
| `roomUsers` | 현재 방에 접속 중인 플레이어 목록 및 상태 (READY 등) | battle, result |
| `battleSettings` | 방에서 설정한 조건(난이도, 제한 시간 등) 정보 | room |

### 2.2 배틀 및 문제 진행
| Key | 용도 | 사용되는 곳 |
|-----|------|------------|
| `battleProblems` | 선택된(또는 랜덤 배정된) 문제 배열 리스트 | room, battle |
| `battleProblemData` | 현재 풀고 있는 특정 문제의 메타 데이터(제목, 설명, 입출력) | battle, result |
| `battleSubmission` | 현재 배틀 중 제출한 최종 결과(통과율, 소요시간 등) | battle, result |
| `myBattleCode` | 배틀 종료 시 내가 작성했던 코드 (결과창 비교용) | battle, result |
| `opponentBattleCode`| 상대방이 작성한 코드 (결과창 비교용) | battle, result |
| `battleDraft_{sessionId}` | 현재 배틀 세션의 작성 중인 코드 드래프트 (임시 저장) | battle |
| `battleDraftCode_{sessionId}` | 드래프트 코드 원본 | battle |
| `battleDraftMeta_{sessionId}` | 드래프트 메타 정보 (문제 인덱스, 타임스탬프) | battle |
| `battleSubmittedProblems_{sessionId}` | 문제별 제출 완료 체크 리스트 (인덱스 배열) | battle, room, result |

### 2.3 유저 및 연습 데이터
| Key | 용도 | 사용되는 곳 |
|-----|------|------------|
| `codeHistory_rocky_user` | 내가 제출했던 코드들의 히스토리(최대 50개 유지). PRACTICE 모드는 저장되지 않으며, 로비에서도 표시되지 않음. | lobby, battle, result |
| `practiceState_rocky_user` | 연습 모드(practice) 빈칸 채우기 진행 상태 (diff, lang, answers, checked, hints). 코드 히스토리와 무관. | practice |

---

## 3. 핵심 페이지별 데이터 흐름 (Lifecycle)

### 3.1 방 생성 및 입장 (lobby.html → room.html)
- 로비에서 "방 만들기"를 하면 새로운 방 객체를 생성해 `dynamicRooms` 배열에 `push`하여 저장합니다. 방의 초기 상태는 `WAITING`입니다.
- 로비 화면은 `고정 방(하드코딩)` + `동적 방(dynamicRooms)` 목록을 합쳐서 보여주며, 모드 선택 모달을 통해 특정 모드(1/1, 1/N 등)만 필터링하여 볼 수 있습니다.
- room.html 하단 오른쪽의 `◀ 로비로` 버튼을 누르면 현재 방을 `dynamicRooms`에서 삭제하고 로비로 돌아갑니다.
- 방 세팅(문제 수, 난이도 등)을 변경할 때마다 상태를 업데이트하고, [GAME START] 시:
  1. `battleSettings`와 `battleProblems`를 세팅해 `battle.html`로 넘어갑니다.
  2. `dynamicRooms`에서 해당 방의 상태를 `STARTED`로 변경하여 로비에서 다른 유저가 더 이상 입장할 수 없도록 막습니다.

### 3.2 배틀 진행 (battle.html)

배틀 시작 시 `battleProblems`에서 문제 목록을 로드하고 `sessionId`를 기준으로 드래프트 키(`battleDraft_{sessionId}`, `battleDraftCode_{sessionId}`, `battleDraftMeta_{sessionId}`)를 초기화합니다. `sessionSavedSnapshot`을 현재 코드 상태로 설정하여 저장 기준점을 확보합니다.

**자동 저장 (백그라운드)**: 일정 간격(30초)마다 `persistBattleSession(answers)`를 호출하여 작성 중인 코드를 `battleDraft_*`에 저장합니다. 이 호출은 `commit: false`(기본값)로 동작하므로 `sessionSavedSnapshot`을 갱신하지 않고 `isEdited` 플래그도 변경하지 않습니다. 저장은 localStorage와 서버 파일 시스템에 동시에 수행됩니다.

**문제 전환 저장 팝업**: 사용자가 문제 이동 버튼을 누르면 `requestProblemSwitch(nextIndex)`가 실행됩니다. 이 함수는 `answers.join('||') !== sessionSavedSnapshot`을 직접 비교하여 변경 여부를 판단합니다(React state의 `isEdited`를 사용하지 않음). 변경이 감지되면 "저장 후 이동 / 이동 취소" 팝업을 표시합니다. 사용자가 `저장 후 이동`을 선택하면 `persistBattleSession(answers, { commit: true })`를 호출하여 `sessionSavedSnapshot`을 갱신하고 문제를 전환한 뒤 `markProblemSubmitted(currentIndex)`를 실행합니다.

**문제별 제출 체크**: `markProblemSubmitted(problemIndex)`는 `battleSubmittedProblems_{sessionId}`에 체크된 문제 인덱스 배열을 저장합니다. 스코어보드의 체크박스는 이 키를 읽어 각 문제의 제출 완료 여부를 표시합니다. Rocky(본인)는 실제 상태(`submittedProblemIndices`)와 localStorage로 관리하고, 상대방은 더미 데이터로 표시합니다.

**제출 (SUBMIT)**: SUBMIT 버튼을 누르면 `persistBattleSession(answers, { commit: true })`로 저장 후 `markProblemSubmitted(currentIndex)`로 체크하고, `battleSubmission`, `myBattleCode`, `battleProblemData`를 각각 저장한 뒤 `result.html`로 이동합니다. 코드 제출마다 `codeHistory_rocky_user` 배열 앞쪽에 최신 코드를 갱신(최대 50개 유지)합니다.

**세션 정리 (공통)**: `deleteRoomAndNavigate()`(battle), `clearSessionAndNavigateLobby()`(result), `handleLeaveToLobby()`(room), `handleStartGame()`(room)에서 `battleSubmittedProblems_{sessionId}`, `battleDraft_{sessionId}`, `battleDraftCode_{sessionId}`, `battleDraftMeta_{sessionId}`를 포함한 모든 배틀 세션 키를 일괄 정리합니다. 세션 데이터는 결과 화면(result.html)까지 유지되며, 로비로 나갈 때만 삭제됩니다.

### 3.3 대결 결과 및 방 폭파 (result.html → lobby.html)
- 결과창에서는 `myBattleCode`와 `opponentBattleCode`를 불러와 서로의 코드를 비교할 수 있게 보여줍니다.
- 사용자가 결과창에서 **나가기(EXIT)** 버튼을 누르면:
  1. `dynamicRooms` 목록을 불러옵니다.
  2. 현재 방(`roomId`)과 일치하는 요소를 `filter`로 제거하여 다시 저장합니다. (방 폭파)
  3. `battleSubmittedProblems_{sessionId}`, `battleDraft_{sessionId}`, `battleDraftCode_{sessionId}`, `battleDraftMeta_{sessionId}`, `roomUsers` 등 불필요해진 임시 배틀 데이터를 초기화하거나 정리한 후 `lobby.html`로 복귀합니다.

### 3.4 연습 모드 (practice.html)

연습 모드는 기존의 코드 에디터 기반 알고리즘 문제 풀이에서 **빈칸 채우기 기반 실습**으로 재구성되었습니다.

- 로비에서 언어, 난이도, 문제 수를 선택하면 `practice.html?lang=...&diff=...&count=...`로 이동합니다.
- `js/practice-exercises.js`에서 난이도별 문제 풀에서 랜덤 선택 후 표시합니다.
- 문제는 `[1]` 빈칸이 있는 설명문 형태로 표시되며, 사용자가 정답을 입력하고 "정답 확인"을 누르면 즉시 확인됩니다.
- 정답 확인 시: 정답/오답 표시 + 정답 + 해설이 함께 렌더링됩니다.
- "힌트 보기" 버튼으로 정답 확인 전에 힌트를 볼 수 있습니다.
- 사이드바에서 각 문제의 정답/오답/미풀이 상태를 O/X로 확인할 수 있습니다.
- 진행 상태(`practiceState_rocky_user`)에 현재 인덱스, 답변, 체크/힌트 상태를 임시 저장합니다.
- **중요**: 연습 모드는 `codeHistory_rocky_user`에 저장되지 않으며, 로비 "내 코드 보기"에서도 표시되지 않습니다.
- EXIT 버튼으로 로비로 돌아갈 때 `practiceState_rocky_user`를 정리합니다.

---

## 4. 요약
> 데이터를 임시로 보관해야 할 때는 `setItem('key', JSON.stringify(data))`  
> 데이터를 꺼내서 복원해야 할 때는 `JSON.parse(getItem('key'))`  
> 더 이상 필요 없는 배틀/세션 데이터는 `removeItem('key')` 또는 배열 `filter()`를 이용해 삭제합니다.
