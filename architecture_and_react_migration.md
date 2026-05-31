# Rocky Build Server - React/Electron 최종 구조

이 문서는 현재 프로젝트를 React로 옮길 때의 최종 구조를 정리한다. 기준은 다음과 같다.

- `index` 는 제외한다.
- `pages` 는 화면 조립만 담당한다.
- `components/common` 은 진짜 공통 UI만 둔다.
- `components/lobby`, `components/room`, `components/battle`, `components/result`, `components/practice` 는 화면 전용 컴포넌트만 둔다.
- `src`와 같은 계층에 `electron/`을 두고, Electron은 CSS 고정 및 데스크톱 래퍼를 담당한다.

---

## 최종 구조

```text
project-root/                                   # 프로젝트 루트
├─ src/                                         # 프론트엔드 React 소스
│  ├─ pages/                                    # 페이지 — 화면 단위 조립
│  │  ├─ lobby/                                 # 로비 페이지 폴더
│  │  │  └─ LobbyPage.jsx                       # 로비 페이지
│  │  ├─ room/                                  # 대기방 페이지 폴더
│  │  │  └─ RoomPage.jsx                        # 대기방 페이지
│  │  ├─ battle/                                # 배틀 페이지 폴더
│  │  │  └─ BattlePage.jsx                      # 배틀 페이지
│  │  ├─ result/                                # 결과 페이지 폴더
│  │  │  └─ ResultPage.jsx                      # 결과 페이지
│  │  └─ practice/                              # 연습 페이지 폴더
│  │     └─ PracticePage.jsx                    # 연습 페이지
│  ├─ components/                               # 컴포넌트
│  │  ├─ common/                                # 공통 컴포넌트
│  │  │  └─ button/                             # 버튼 컴포넌트
│  │  │     ├─ Button.jsx                       # 버튼
│  │  │     ├─ Button.module.css                # 버튼 스타일
│  │  │     └─ index.js                         # 버튼 내보내기
│  │  ├─ lobby/                                 # 로비 전용 컴포넌트
│  │  │  ├─ RoomList/                           # 방 목록 그리드
│  │  │  ├─ RoomCard/                           # 개별 방 카드
│  │  │  ├─ RoomCreateModal/                    # 방 생성 팝업
│  │  │  ├─ ModeFilterModal/                    # 모드 필터 팝업
│  │  │  ├─ PracticeModal/                      # 연습 모드 진입 팝업
│  │  │  ├─ CodeHistoryModal/                   # 코드 히스토리 팝업
│  │  │  ├─ ProfilePanel/                       # 프로필 패널
│  │  │  ├─ InventoryPanel/                     # 골드/아이템 인벤토리 패널
│  │  │  ├─ ItemShopModal/                      # 아이템 구매 팝업
│  │  │  ├─ RankingBoard/                       # 랭킹 보드
│  │  │  └─ LobbyChatPanel/                     # 로비 채팅
│  │  ├─ room/                                  # 대기방 전용 컴포넌트
│  │  │  ├─ RoomHeader/                         # 방 헤더
│  │  │  ├─ PlayerGrid/                         # 플레이어 슬롯 전체 레이아웃
│  │  │  ├─ PlayerSlot/                         # 개별 플레이어 슬롯
│  │  │  ├─ CharacterSelect/                    # 캐릭터 선택
│  │  │  ├─ BattleSettingsPanel/                # 배틀 설정 패널
│  │  │  ├─ OnlineUserList/                     # 접속자 목록
│  │  │  ├─ RoomActionBar/                      # 방 액션바
│  │  │  ├─ StartGameOverlay/                   # 시작 카운트다운 오버레이
│  │  │  ├─ RoomProfileModal/                   # 프로필 팝업
│  │  │  └─ RoomChatPanel/                      # 대기방 채팅
│  │  ├─ battle/                                # 배틀 전용 컴포넌트
│  │  │  ├─ ProblemViewer/                      # 문제 본문과 예시
│  │  │  ├─ CodeEditorPanel/                    # 코드 에디터 영역
│  │  │  ├─ TerminalPanel/                      # 출력창과 상태
│  │  │  ├─ BuildResizeHandle/                  # 출력창 리사이즈 손잡이
│  │  │  ├─ BattleSummaryPanel/                 # 우측 요약 패널
│  │  │  ├─ UserList/                           # 스코어보드 유저 리스트 + 체크박스
│  │  │  ├─ BattleActionBar/                    # 문제 이동/저장/제출/종료 액션바
│  │  │  ├─ BattleChatPanel/                    # 배틀 채팅
│  │  │  ├─ GameOverOverlay/                    # 게임 종료 오버레이
│  │  │  ├─ OpponentPanelsContainer/            # 상대 패널 그리드 (1열/2열/확대모드)
│  │  │  ├─ OpponentMiniPanel/                  # 미니 상대 패널 (헤더+코드+효과 아이콘)
│  │  │  ├─ OpponentExpandedPanel/              # 확대 상대 패널 (줄 단위 div+ITEM 버튼)
│  │  │  ├─ ItemSelectModal/                    # 아이템 선택 모달 (라인/특수기호/빌드제한)
│  │  │  ├─ ItemSubModal/                       # 아이템 서브 모달 (수류탄/연막탄/섬광탄, 심볼 그리드)
│  │  │  ├─ ItemRevealTimer/                    # 코드 공개 카운트다운 타이머
│  │  │  └─ PaintCanvasOverlay/                 # Canvas 2D 페인트 오버레이 (blob/streak/drip/droplet)
│  │  ├─ result/                                # 결과 전용 컴포넌트
│  │  │  ├─ ResultStatePanel/                   # WIN/LOSE 상태 패널
│  │  │  ├─ ResultPlayerList/                   # 플레이어 목록
│  │  │  ├─ ResultRankingPanel/                 # 개인전 랭킹 패널 (1/N 모드)
│  │  │  ├─ ResultCodeModal/                    # 코드 확인 모달
│  │  │  ├─ PlayerCodesPanel/                   # PLAYER CODES 패널 (결과 페이지 오른쪽)
│  │  │  ├─ ResultChatPanel/                    # 결과 채팅
│  │  │  ├─ ResultActionBar/                    # 다시하기/나가기 액션바
│  │  │  ├─ AiReviewerPanel/                    # AI 리뷰어 플로팅 패널
│  │  │  └─ OnlineUserList/                     # 접속자 목록
│  │  └─ practice/                              # 연습 전용 컴포넌트
│  │     ├─ PracticeBlankInput/                 # 빈칸 정답 입력
│  │     ├─ PracticeCheckButton/                # 정답 확인 + 결과 표시
│  │     ├─ PracticeHintButton/                 # 힌트 보기
│  │     ├─ PracticeExplainBox/                 # 정답 + 해설 렌더링
│  │     ├─ PracticeProgressPanel/              # O/X 상태 사이드바 + 진행도
│  │     └─ PracticeNavigator/                  # 문제 이동 네비게이터
│  ├─ hooks/                                    # 커스텀 훅
│  │  ├─ useLocalStorage.js                     # localStorage 읽기/쓰기/삭제 — 모든 페이지
│  │  └─ useTimer.js                            # 카운트다운 타이머 — battle, practice
│  ├─ utils/                                    # 순수 유틸리티 함수
│  │  └─ formatTime.js                          # 초 → mm:ss 변환
│  ├─ api/                                      # 백엔드 API 요청
│  │  └─ buildApi.js                            # POST /api/v1/build/run
│  ├─ services/                                 # 비즈니스 로직 서비스
│  │  ├─ battleService.js                       # 배틀 세션 저장/체크/정리
│  │  └─ roomService.js                         # 방 CRUD (dynamicRooms, roomUsers, battleSettings)
│  ├─ constants/                                # 프로젝트 전역 상수
│  │  ├─ routes.js                              # 페이지 경로 (LOBBY, ROOM, BATTLE, RESULT, PRACTICE)
│  │  ├─ storageKeys.js                         # localStorage 키 (ROCKY_GOLD, BATTLE_SUBMISSION 등)
│  │  ├─ itemTypes.js                           # 아이템 타입/하위타입/가격 상수
│  │  ├─ gameStatus.js                          # 게임/방 상태값 (WAITING, PLAYING, FINISHED)
│  │  └─ socketEvents.js                        # WebSocket 이벤트명 (JOIN_ROOM, CODE_SUBMIT 등)
│  ├─ socket/                                   # WebSocket (미래 도입)
│  │  ├─ socketClient.js                        # 연결/재연결/emit 관리
│  │  └─ socketHandlers.js                      # 이벤트 → store 액션 매핑
│  └─ store/                                    # 전역 상태 저장소 (추후 DB 연동)
│     ├─ userStore.js                           # 골드, 아이템, 프로필, 코드 히스토리
│     ├─ lobbyStore.js                          # 방 목록, 필터, 로비 채팅
│     ├─ roomStore.js                           # 룸 설정, 플레이어, Ready 상태
│     ├─ battleStore.js                         # problems/answers, battleBots, 타이머, 모달 플래그
│     └─ itemStore.js                           # opponentEffects, buildLimits, attackState, itemInventory
└─ electron/                                    # 데스크톱 래퍼
   ├─ main.js                                   # Electron 메인 프로세스
   ├─ preload.js                                # 안전한 브리지
   ├─ css-lock.js                               # CSS 고정 정책
   └─ window-state.js                           # 창 상태 저장/복원
```

---

## 배치 기준

### `pages` (페이지)
페이지는 상태를 길게 들고 있지 않고, 화면 블록을 조립만 한다.

- `LobbyPage.jsx` (로비 페이지): 로비 전체 조립
- `RoomPage.jsx` (대기방 페이지): 대기방 전체 조립
- `BattlePage.jsx` (배틀 페이지): 배틀 전체 조립
- `ResultPage.jsx` (결과 페이지): 결과 화면 전체 조립
- `PracticePage.jsx` (연습 페이지): 연습 모드 전체 조립

### `components/common` (공통 컴포넌트)
공통 UI는 프로젝트 전반에서 반복되는 것만 넣는다.

- `Button`만 우선 공통화한다.
- `Card`, `Modal`, `Input`, `Select`는 실제로 여러 화면에서 중복이 확정될 때만 올린다.
- `ChatPanel`, `TerminalPanel`, `UserList`, `ProgressBar`도 공통으로 보일 수 있지만, 이 프로젝트는 화면별 스타일 차이가 커서 처음부터 공통에 넣지 않는다.

즉, 지금 단계에서 무조건 공통으로 올릴 건 `Button`이다.

### `components/lobby` (로비 전용)
로비는 다음 블록으로 나눈다.

- `RoomList` (방 목록): 방 목록 그리드
- `RoomCard` (방 카드): 각 방 카드
- `RoomCreateModal` (방 생성 모달): 방 생성 팝업
- `ModeFilterModal` (모드 필터 모달): 모드 필터 팝업
- `PracticeModal` (연습 모달): 연습 모드 진입 팝업
- `CodeHistoryModal` (코드 히스토리 모달): 제출 코드 히스토리 팝업
- `ProfilePanel` (프로필 패널): 내 정보와 코드 보기 팝업
- `InventoryPanel` (인벤토리 패널): 💰 아이템 & 골드 — 보유 골드, 아이템별 개수, `🛒 아이템 구매` 버튼
- `ItemShopModal` (아이템 구매 모달): 아이템별 가격(라인 50G/특수기호 30G/빌드제한 70G), 구매 버튼, 골드 차감+아이템 증가
- `RankingBoard` (랭킹 보드): 랭킹 리스트
- `LobbyChatPanel` (로비 채팅): 로비 채팅

### `components/room` (대기방 전용)
대기방은 참가자 슬롯과 시작 전 설정이 핵심이다.

- `RoomHeader` (방 헤더): 방 제목과 상태 배지
- `PlayerGrid` (플레이어 그리드): 슬롯 전체 레이아웃
- `PlayerSlot` (플레이어 슬롯): 한 명 슬롯
- `CharacterSelect` (캐릭터 선택): 캐릭터 선택
- `BattleSettingsPanel` (배틀 설정 패널): 난이도/시간/문제 수 설정
- `OnlineUserList` (접속자 목록): 접속자 목록
- `RoomActionBar` (방 액션바): READY / START / EXIT 버튼 모음
- `StartGameOverlay` (시작 오버레이): 시작 카운트다운 오버레이
- `RoomProfileModal` (프로필 모달): 프로필 팝업
- `RoomChatPanel` (대기방 채팅): 대기방 채팅

### `components/battle` (배틀 전용)
배틀은 상태가 가장 많아서 블록을 더 엄격하게 나눈다.

- `ProblemViewer` (문제 뷰어): 문제 본문과 예시
- `CodeEditorPanel` (코드 에디터): 코드 에디터 영역
- `TerminalPanel` (터미널): 출력창과 상태
- `BuildResizeHandle` (리사이즈 손잡이): 출력창 리사이즈 손잡이
- `BattleSummaryPanel` (배틀 요약 패널): 우측 시간/언어/진행/저장 상태
- `UserList` (유저 목록): 우측 스코어보드 유저 리스트와 문제 체크 상태
- `BattleActionBar` (배틀 액션바): 문제 이동 버튼, 제출 버튼, 종료 버튼
- `BattleChatPanel` (배틀 채팅): 배틀 채팅
- `GameOverOverlay` (게임 오버 오버레이): 종료 오버레이
- `OpponentPanelsContainer` (상대 패널 컨테이너): 2~7봇 그리드 레이아웃, 1열(2~4봇)/2열(5+봇) 분할, 확대모드 전환
- `OpponentMiniPanel` (미니 상대 패널): 축소된 상대 코드 뷰 (헤더+blur 코드+효과 아이콘💨💥💣🔣🚫)
- `OpponentExpandedPanel` (확대 상대 패널): 전체 코드 줄 단위 `<div>` 렌더링, 아이템 효과(line-flash/line-smoke/line-deleted) 시각화, `PaintCanvasOverlay` 페인트 오버레이, ITEM 버튼, 공개 타이머
- `ItemSelectModal` (아이템 선택 모달): 라인/특수기호/빌드제한 3종 선택
- `ItemSubModal` (아이템 서브 모달): 수류탄/연막탄/섬광탄 그리드, 특수기호 추가/삭제 그리드
- `ItemRevealTimer` (코드 공개 타이머): 아이템 적용 시 3초/10초 카운트다운 표시

여기서 중요한 점은:

- 문제별 체크박스는 `UserList` 내부 요소로 둔다.
- 저장/이동 팝업은 `BattleActionBar`의 문제 이동 버튼 흐름과 연결한다.
- 아이템 흐름: `OpponentExpandedPanel`(ITEM 버튼) → `ItemSelectModal`(종류 선택) → `ItemSubModal`(세부 선택) 또는 바로 적용(빌드제한) → `OpponentExpandedPanel`(효과 렌더링) + `ItemRevealTimer`(카운트다운)
- `opponentEffects`, `buildLimits`, `itemInventory`는 `itemStore`에서 관리 (battleStore와 분리)

### `components/result` (결과 전용)
결과는 승패/랭킹, 코드 확인, AI 리뷰어가 핵심이다.

- `ResultStatePanel` (결과 상태 패널): WIN / LOSE 패널 (1/1 모드)
- `ResultRankingPanel` (랭킹 패널): 개인전 등수 패널 (1/N 모드), 금/은/동 테두리
- `ResultPlayerList` (결과 플레이어 목록): 플레이어 목록
- `PlayerCodesPanel` (플레이어 코드 패널): PLAYER CODES — 상단 고정 제목 + 스크롤 버튼 목록, ONLINE USERS와 1:1 높이
- `ResultCodeModal` (코드 확인 모달): 코드 확인 모달
- `ResultChatPanel` (결과 채팅): 결과 채팅
- `ResultActionBar` (결과 액션바): 다시하기 / 나가기
- `AiReviewerPanel` (AI 리뷰어 패널): AI 리뷰어 플로팅 패널
- `OnlineUserList` (접속자 목록): 접속자 목록

### `components/practice` (연습 전용)
연습 모드는 세션 복원과 문제 이동이 핵심이다.

- `PracticeProblemViewer` (문제 뷰어): 문제 본문
- `PracticeNavigator` (문제 네비게이터): 문제 이동
- `PracticeRestoreModal` (세션 복원 모달): 이전 세션 복원 팝업
- `PracticeActionBar` (연습 액션바): 제출 / 종료 / 빌드
- `PracticeCodeEditorPanel` (코드 에디터): 코드 입력
- `PracticeTerminalPanel` (터미널): 실행 결과

---

## HTML → React 분석 매핑

각 컴포넌트의 배치는 현재 HTML 구조를 분석하여 결정했다. 같은 UI 블록이라도 페이지별로 레이아웃/스타일 차이가 크면 별도 컴포넌트로 유지하고, 실제로 동일한 구조가 반복될 때만 `common`으로 올린다.

### lobby.html → `components/lobby`

| HTML 영역 | 컴포넌트 | 배치 근거 |
|-----------|---------|----------|
| `.room-list` 내 방 카드 그리드 | `RoomList` | 로비에서만 방 목록을 렌더링. 다른 페이지에 없음. |
| `.room-card` 개별 방 | `RoomCard` | 로비 전용. room.html에는 방 목록이 없음. |
| `#createRoomModal` | `RoomCreateModal` | 방 생성 UI는 로비에서만 필요. |
| `#modeFilterModal` | `ModeFilterModal` | 모드 필터("1/1", "1/N" 등)는 로비 방 목록 전용. |
| `#practiceModal` | `PracticeModal` | 연습 진입 팝업, 로비에서만 표시. |
| `#codeHistoryModal` | `CodeHistoryModal` | 내 코드 보기, 현재는 로비에서만 접근 가능. 추후 타 페이지에서도 쓰더라도 구조가 다를 가능성 높음. |
| 내 정보 프로필 영역 | `ProfilePanel` | 로비 화면 우측 상단 위치. room/battle/result에는 없음. |
| `.inventory-panel` 골드/아이템 인벤토리 | `InventoryPanel` | $ 아이템 & 골드 — 보유 골드, 아이템별 개수, 구매 버튼. 로비 전용. |
| 아이템 구매 팝업 | `ItemShopModal` | 아이템별 가격 표시 + 구매 버튼. `rocky_gold`, `rocky_items` 동기화. |
| 랭킹 보드 영역 | `RankingBoard` | 로비 전용. 방/배틀/결과에는 없음. |
| 로비 채팅 영역 | `LobbyChatPanel` | room/battle/result의 채팅과 구조 다름. 각 페이지 전용 채팅 유지. |

### room.html → `components/room`

| HTML 영역 | 컴포넌트 | 배치 근거 |
|-----------|---------|----------|
| 방 제목 + 상태 배지 | `RoomHeader` | 대기방 전용. 다른 페이지 유사 요소 없음. |
| `.player-grid` 전체 레이아웃 | `PlayerGrid` | 대기방 플레이어 슬롯 배치 전용. |
| 개별 플레이어 슬롯 | `PlayerSlot` | 대기방 전용. result의 플레이어 목록과 구조 다름. |
| `#characterSelect` | `CharacterSelect` | 방에서만 캐릭터 선택 UI가 필요함. |
| 난이도/시간/문제 수 설정 | `BattleSettingsPanel` | 방 설정 패널. 방에서만 존재. |
| 온라인 유저 목록 | `OnlineUserList` | `room`과 `result` 페이지에 둘 다 있지만 레이아웃과 기능(초대, 차단 등)이 달라서 각자 전용 컴포넌트로 분리. |
| READY/START/EXIT 버튼 모음 | `RoomActionBar` | 대기방 하단 액션바. battle/result와 완전히 다른 구조. |
| 게임 시작 카운트다운 오버레이 | `StartGameOverlay` | 방에서만 표시. battle의 GameOverOverlay와 다름. |
| `#roomProfileModal` | `RoomProfileModal` | 방에서만 플레이어 프로필 확인 기능. |
| 대기방 채팅 | `RoomChatPanel` | lobby/battle/result 채팅과는 별도 컴포넌트. |

### battle.html → `components/battle`

| HTML 영역 | 컴포넌트 | 배치 근거 |
|-----------|---------|----------|
| `.problem-description` 문제 본문 + 예시 | `ProblemViewer` | 배틀 전용. practice의 문제 뷰어와 구조가 다름 (타이머/점수 연동 등). |
| 코드 에디터 영역 | `CodeEditorPanel` | 배틀 전용. practice 에디터와는 저장/복원 로직이 다름. |
| 출력/터미널 영역 | `TerminalPanel` | 배틀 전용. practice 터미널과는 실행 흐름 차이. |
| 출력창 리사이즈 손잡이 | `BuildResizeHandle` | 배틀에서만 에디터/터미널 분할 리사이즈 필요. |
| 우측 요약 패널 (시간/언어/진행) | `BattleSummaryPanel` | 배틀 전용 UI. 진행 상태 + 스코어보드 + 설정이 결합. |
| 스코어보드 유저 리스트 + 체크박스 | `UserList` | 배틀 전용. room/result의 UserList와 레이아웃 및 기능이 다름. 체크박스는 이 컴포넌트 내부에서 렌더링. |
| 문제 이동/저장/제출/종료 액션바 | `BattleActionBar` | 배틀 전용. 저장 팝업 연결 로직 포함. |
| 배틀 채팅 | `BattleChatPanel` | 배틀 전용 채팅. lobby/room/result와 별도. |
| 게임 종료 오버레이 | `GameOverOverlay` | 배틀 전용. 방의 StartGameOverlay와 다름. |
| `.opponent-panels-container` 상대 패널 그리드 | `OpponentPanelsContainer` | 1열/2열 분할 + 확대모드 전환. 배틀에서만 존재. |
| `.opponent-code-panel-mini` 미니 패널 | `OpponentMiniPanel` | 상대 코드 축소 뷰. 효과 아이콘 포함. |
| `.opponent-code-panel-mini.expanded` 확대 패널 | `OpponentExpandedPanel` | 줄 단위 `<div>` 코드 렌더링, ITEM 버튼, 공개 타이머, 아이템 효과 시각화. |
| 아이템 선택 모달 | `ItemSelectModal` | 아이템 3종 선택 창. `itemInventory` 기반 잔여 횟수 표시. |
| 아이템 서브 모달 | `ItemSubModal` | 수류탄/연막탄/섬광탄 3종 그리드 또는 특수기호 추가/삭제 그리드. |
| 코드 공개 카운트다운 | `ItemRevealTimer` | 아이템 적용 후 3초 코드 공개 카운트다운. `attackState.revealTimer` 기반. |
| `.panel-paint-overlay` Canvas 오버레이 | `PaintCanvasOverlay` | `opponentEffects[botId][problemIndex].panelEffect` 기반 Canvas 2D 렌더링. 방사형 blob/streak/droplet/drip 파티클. |

### result.html → `components/result`

| HTML 영역 | 컴포넌트 | 배치 근거 |
|-----------|---------|----------|
| WIN/LOSE 상태 패널 | `ResultStatePanel` | 결과 전용 승패 표시 (1/1 모드). |
| 개인전 랭킹 패널 | `ResultRankingPanel` | 결과 전용 순위 표시 (1/N 모드). 금/은/동 테두리 + 등수 + 점수. |
| 참가자 결과 목록 | `ResultPlayerList` | 결과 전용. room의 PlayerSlot과 구조 다름. |
| `.code-view-list` 플레이어 코드 목록 | `PlayerCodesPanel` | PLAYER CODES — 상단 고정 제목 + 스크롤 버튼 목록. |
| `#codeModal` 코드 비교 모달 | `ResultCodeModal` | 결과 전용 코드 비교 뷰어. |
| 결과 채팅 | `ResultChatPanel` | 결과 전용. |
| 다시하기/나가기 액션바 | `ResultActionBar` | 결과 전용. |
| `#aiReviewer` AI 리뷰어 플로팅 패널 | `AiReviewerPanel` | 결과 전용. |
| 온라인 유저 목록 | `OnlineUserList` | `result` 전용. room의 OnlineUserList와 레이아웃/기능 차이로 분리. |

### practice.html → `components/practice`

| HTML 영역 | 컴포넌트 | 배치 근거 |
|-----------|---------|----------|
| 문제 본문 + 설명 | `PracticeProblemViewer` | 빈칸 `[1]`을 styled blank-box로 시각화하여 표시. |
| 정답 입력 필드 | `PracticeBlankInput` | 빈칸에 들어갈 정답을 타이핑하는 input. Enter로 정답 확인. |
| 정답 확인 버튼 | `PracticeCheckButton` | 정답/오답 표시 + 정답 보여주기 + 해설 표시 전환. |
| 힌트 보기 버튼 | `PracticeHintButton` | 정답 확인 전에 힌트를 노출하는 토글 버튼. |
| 해설 + 정답 표시 | `PracticeExplainBox` | 정답 확인 후 정답 + 해설을 렌더링하는 패널. |
| 사이드바 문제 목록 | `PracticeProgressPanel` | O/X 정답/오답 상태 + 진행도 바 + 문제 클릭 이동. |
| 하단 문제 이동 네비 | `PracticeNavigator` | < > 버튼 + 현재/전체 문제 표시 + EXIT 버튼. |
| 코드 히스토리 | (없음) | 연습 모드는 더 이상 코드 히스토리에 저장하지 않음. |

### 공통 검토 (`components/common`)

| 후보 | 결정 | 이유 |
|------|------|------|
| `Button` | **common** | 모든 페이지에서 반복 사용. 스타일(props로 variant 지정)만 다름. |
| `Card` | 각 페이지 전용 | 방 카드, 플레이어 슬롯, 결과 카드 등 형태와 쓰임새가 페이지마다 다름. 공통화하면 오히려 props 폭발. |
| `Modal` | 각 페이지 전용 | 모달 종류(방 생성, 저장 팝업, 코드 확인, 프로필, 세션 복원)마다 내부 구조와 동작이 완전히 다름. 공통 Modal을 만들면 if/else 분기가 너무 많아짐. |
| `ChatPanel` | 각 페이지 전용 | 로비/방/배틀/결과의 채팅은 각각 배치 위치, 메시지 포맷, 전송 로직이 달라서 통합 불가. |
| `UserList` | 각 페이지 전용 | 방(접속자+상태), 배틀(스코어보드+체크박스), 결과(순위+점수)가 모두 다른 구조. |
| `ProgressBar`, `TerminalPanel` | 각 페이지 전용 | 배틀과 연습에서 타이머/진행 표시 방식과 터미널 출력 로직이 다름. |

분석 결과, 현재 프로젝트에서 `components/common`에 둘 만한 UI는 **`Button`** 뿐이다. 나머지는 모두 페이지 특화 구조가 강해 각 페이지 전용 폴더에 유지하는 것이 유지보수에 유리하다.

---

## Store 설계 (DB 연동 전제)

Store는 나중에 API 호출(DB 연동)로 대체될 것을 가정하고, 각각 독립된 책임을 갖도록 분리한다. 현재는 localStorage와 연결되어 동작한다.

| Store | 위치 | 책임 | 주요 상태 | localStorage 키 |
|-------|------|------|----------|-----------------|
| `userStore` | `src/store/userStore.js` | 유저 지속 데이터 (모든 페이지 공통) | `gold`, `items`, `profile`(이름/레벨/티어), `codeHistory` (PRACTICE 모드 제외) | `rocky_gold`, `rocky_items`, `codeHistory_rocky_user` |
| `battleStore` | `src/store/battleStore.js` | 배틀 핵심 메커니즘 | `problems`, `answers`, `currentIndex`, `battleBots`, `botSolves`, `remaining`, `demoSpectating`, `sidebarCollapsed`, `expandedOpponentId`, 모달 플래그(showSaveModal, showAdvanceModal 등) | `battleSubmission`, `battleDemoState_{sessionId}`, `battleDraft_*`, `roomUsers` |
| `itemStore` | `src/store/itemStore.js` | 아이템 상호작용 (battleStore와 분리) | `opponentEffects`, `buildLimits`, `itemInventory`(인게임), `attackState` | `rocky_items`(인게임 증감 후 동기화) |
| `roomStore` | `src/store/roomStore.js` | 방 생명주기 | `roomId`, `settings`(mode/maxPlayers/lang/time), `players`, `ready` 상태 | `dynamicRooms`, `roomUsers`, `battleSettings` |
| `lobbyStore` | `src/store/lobbyStore.js` | 로비 탐색 | `rooms`, `modeFilter`, 로비 채팅 | `dynamicRooms` |

**`itemStore`를 `battleStore`에서 분리한 이유**: 아이템은 클라이언트 간 실시간 동기화(WebSocket)가 필요한 도메인이다. 추후 WebSocket 도입 시 `socketHandlers.js`에서 `ITEM_USE` 이벤트를 `itemStore`에만 연결하면 되어 수정 범위가 좁아진다.

---

## Constants 설계

프로젝트 전역에서 공통으로 쓰는 문자열과 상태값을 중앙화한다.

| 파일 | 위치 | 분류 기준 | 포함 내용 | 필요성 |
|------|------|----------|-----------|--------|
| `routes.js` | `src/constants/routes.js` | 페이지 경로 | `LOBBY: "/lobby"`, `ROOM: "/room"`, `BATTLE: "/battle"`, `RESULT: "/result"`, `PRACTICE: "/practice"` | 즉시 유용 — 현재 `window.location.href`에 하드코딩된 경로 중앙화 |
| `storageKeys.js` | `src/constants/storageKeys.js` | localStorage 키 | `ROCKY_GOLD`, `ROCKY_ITEMS`, `BATTLE_SUBMISSION`, `BATTLE_DEMO_STATE`, `ROOM_USERS`, `CODE_HISTORY` 등 15여개 | 즉시 유용 — 타이포 방지, DB 전환 시 일괄 변경 가능 |
| `itemTypes.js` | `src/constants/itemTypes.js` | 아이템 도메인 | `LINE`, `SYMBOL`, `BUILD_LIMIT`, `LINE_SUBTYPES`(grenade/smoke/flash), `ITEM_PRICES`(50/30/70) | 즉시 유용 — 로비 구매 + 배틀 모달에서 동시 참조 |
| `gameStatus.js` | `src/constants/gameStatus.js` | 방/게임 상태값 | `WAITING`, `PLAYING`, `FINISHED` | 미래 대비 — 현재는 `'WAITING'`/`'STARTED'` 문자열만 사용, WebSocket 도입 후 필요 |
| `socketEvents.js` | `src/constants/socketEvents.js` | WebSocket 이벤트명 | `JOIN_ROOM`, `START_GAME`, `CODE_SUBMIT`, `SCORE_UPDATE`, `PROBLEM_ADVANCE`, `GAME_OVER`, `ITEM_USE`, `CHAT_MESSAGE` | 미래 대비 — 소켓 도입 시 서버/클라이언트 간 이벤트명 일치 보장 |

---

## Socket 설계

WebSocket 도입은 아직 시작하지 않았으므로 기본 구조만 잡는다.

| 파일 | 위치 | 역할 |
|------|------|------|
| `socketClient.js` | `src/socket/socketClient.js` | WebSocket 인스턴스 관리 (connect/disconnect/reconnect), `emit(event, data)` 메서드 제공 |
| `socketHandlers.js` | `src/socket/socketHandlers.js` | 이벤트 → store 액션 매핑. 예: `ITEM_USE` → `itemStore.applyEffect()`, `SCORE_UPDATE` → `battleStore.updateScore()`, `CHAT_MESSAGE` → 각 페이지 chat state |

`socketClient.js`는 `constants/socketEvents.js`의 이벤트명을 import하여 사용하므로, 이벤트명 불일치로 인한 버그를 방지한다.

---

## Electron 추가

`src`와 같은 계층에 `electron/`을 둔다.

목적은 다음과 같다.

- 데스크톱 앱 래퍼 제공
- 창 크기/위치 관리
- CSS 고정, 즉 외부에서 스타일이 흔들리지 않도록 Electron 시작점에서 고정 정책 적용

제안 파일 역할:

- `main.js`: Electron 메인 프로세스
- `preload.js`: 안전한 브리지
- `css-lock.js`: 스타일 고정/주입 정책
- `window-state.js`: 창 상태 저장/복원

---

## 현재 상태와의 연결

현재 HTML 기반 화면은 아래처럼 옮기는 게 맞다.

- `lobby.html` → `pages/lobby/LobbyPage.jsx`
- `room.html` → `pages/room/RoomPage.jsx`
- `battle.html` → `pages/battle/BattlePage.jsx`
- `result.html` → `pages/result/ResultPage.jsx`
- `practice.html` → `pages/practice/PracticePage.jsx`

`battle.html`의 최근 변경사항은 특히 다음과 직접 연결된다.

- 저장 전환 팝업
- localStorage + 파일 시스템 동시 저장
- 문제별 제출 체크 상태
- 결과 화면으로 넘어가도 세션 유지
- 로비로 나갈 때만 세션 정리
- **상대 패널 다중 표시 (2~7봇)**: `OpponentPanelsContainer` + `OpponentMiniPanel` + `OpponentExpandedPanel`
- **아이템 시스템 (수류탄/연막탄/섬광탄/특수기호/빌드제한)**: `ItemSelectModal` + `ItemSubModal` + `ItemRevealTimer`, 상태는 `itemStore`에서 관리
- **효과 인디케이터 (💨💥💣🔣🚫)**: `OpponentMiniPanel`과 `OpponentExpandedPanel` 헤더에 멀티 아이콘 표시
- **골드/아이템 인벤토리**: 로비 `InventoryPanel`에서 `userStore`로 관리, `ItemShopModal`로 구매 가능
- **인게임 아이템 동기화**: `battle.html` 초기 로드 시 `rocky_items` localStorage에서 읽어옴, 사용 시 다시 기록

이런 로직은 `BattlePage`와 `battle` 전용 hooks/services로 분리해야 한다.

---

## 기준

- `pages` (페이지) = 화면 조립만
- `components/common` (공통 컴포넌트) = 진짜 공통 UI만
- `components/<page>` (페이지 전용 컴포넌트) = 그 페이지 전용 UI만
- `hooks` (훅) = 저장/복원/타이머 같은 반복 로직
- `utils` (유틸) = 문자열/시간/포맷 같은 순수 함수
- `api` (API) = 서버 통신
- `services` (서비스) = 배틀/세션 흐름 같은 규칙
- `constants` (상수) = 경로, localStorage 키, 아이템 타입/가격, 게임 상태값, 소켓 이벤트명 등 프로젝트 전역 상수
- `socket` (소켓) = WebSocket 연결/이벤트 관리 (미래 도입, 기본 구조만 준비)
- `store` (스토어) = 전역 상태 저장소 — userStore(유저 지속 데이터), battleStore(배틀 메커니즘), itemStore(아이템 상호작용), roomStore(방 생명주기), lobbyStore(로비 탐색). 추후 DB 연동 시 API 호출로 대체
- `electron` (일렉트론) = 데스크톱 래퍼 + CSS 고정
