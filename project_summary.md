# Rocky Build Server - 프로젝트 요약

## 1. 프로젝트 개요
**Rocky Build Server**는 Spring Boot 기반의 온라인 코드 컴파일러 및 코딩 배틀 플랫폼입니다. 사용자가 웹 브라우저에서 코드를 작성하고 제출하면, 백엔드 서버가 Docker 컨테이너 환경에서 해당 코드를 안전하게 격리 실행한 뒤 결과(표준 출력 및 에러)를 프론트엔드로 반환합니다.

- **프로젝트명**: rocky-build-server
- **그룹 ID**: com.springboot.rocky
- **언어**: Java 21
- **빌드 도구**: Gradle (Spring Boot 4.0.5)

---

## 2. 전체 디렉토리 구조 (핵심)

```text
rocky-build-server/
├── build.gradle
├── src/
│   ├── main/
│   │   ├── java/com/springboot/rocky/
│   │   │   ├── RockyBuildServerApplication.java
│   │   │   ├── config/
│   │   │   │   ├── AppConfig.java          # 디렉토리 경로 상수
│   │   │   │   └── WebConfig.java          # CORS 설정
│   │   │   ├── controller/
│   │   │   │   └── BuildController.java    # 핵심 API 엔드포인트
│   │   │   ├── dto/
│   │   │   │   ├── BuildResponse.java      # 실행 결과 응답 DTO
│   │   │   │   └── CodeRequest.java        # 코드 실행 요청 DTO
│   │   │   └── service/
│   │   │       ├── DockerService.java      # Docker CLI 실행
│   │   │       └── FileService.java        # 소스 파일 저장
│   │   └── resources/
│   │       └── static/
│   │           ├── index.html              # 메인 컴파일러
│   │           ├── lobby.html              # 배틀 로비
│   │           ├── room.html               # 대기방
│   │           ├── battle.html             # 코딩 대결
│   │           ├── result.html             # 대결 결과
│   │           └── practice.html           # 연습 모드 (빈칸 채우기)
│   │           └── js/
│   │               ├── problems.js         # 문제 데이터베이스
│   │               └── practice-exercises.js # 연습 문제 (예약어/함수/메소드)
│   └── test/
│       └── java/com/springboot/rocky/      # 단위/통합 테스트
├── project_summary.md                      # 본 문서
├── localStorage_flow.md                    # 프론트엔드 상태 관리 상세 (수정됨)
├── architecture_and_react_migration.md     # React/Electron 전환 최종 구조
├── electron/                               # 데스크톱 래퍼 (CSS 고정, 창 상태)
│   ├── main.js
│   ├── preload.js
│   ├── css-lock.js
│   └── window-state.js

```

---

## 3. 백엔드 아키텍처

### 3.1 주요 컴포넌트

| 클래스 | 역할 |
|--------|------|
| `BuildController` | `POST /api/v1/build/run` 엔드포인트 제공. `userId`, `language`, `code`를 받아 실행 결과를 반환. |
| `FileService` | 전달받은 코드를 호스트 OS의 `/opt/rocky-build/work/{userId}`에 저장. |
| `DockerService` | `ProcessBuilder`로 Docker 컨테이너 실행 (`--memory 128m`, `--cpus .5`, 10초 타임아웃). |
| `AppConfig` | 호스트/컨테이너의 작업 디렉토리 및 공유 디렉토리 경로 관리. |
| `WebConfig` | 전역 CORS 설정 관리. |

### 3.2 API 명세

- **Endpoint**: `POST /api/v1/build/run`
- **Request Body** (`CodeRequest`): `userId`, `language`, `code`
- **Response** (`BuildResponse`): `success`, `output`, `error`

---

## 4. 프론트엔드 아키텍처 & UI 디자인

별도의 프론트엔드 빌드 도구 없이 CDN으로 **React(Babel), Bootstrap 5**를 로드하는 SPA 기반 정적 웹페이지입니다. 모든 화면은 Retro/Pixel Art(고전 오락실) 스타일로 구현되었습니다.

추후 React/Electron 전환 시에는 `src/`와 같은 계층에 `electron/`을 두고, 창 상태와 CSS 고정 정책을 분리할 계획입니다.

- **색상 팔레트**: `#212529` (배경), `#2C3E50` (서페이스), 네온 포인트 컬러(Blue, Green, Yellow, Red)
- **타이포그래피**: 픽셀 폰트 (NeoDunggeunMo, Galmuri9, Press Start 2P)
- **효과**: CRT 스캔라인, 하드 쉐도우, 미세 픽셀 그리드 배경

| 페이지 | 역할 및 특징 |
|--------|------------|
| `lobby.html` | 모드 선택(팝업 모달 필터), 프로필(내 코드 보기 포함), 접속 유저 및 티어 랭킹 확인. |
| `room.html` | 방 대기실. 채팅, 난이도/문제 수/언어 설정 및 Ready 상태 관리. 게임 시작 시 방 상태를 STARTED로 변경하고, 로비로 나가면 방을 삭제. |
| `battle.html` | 코딩 대결 워크스페이스. 타이머, 문제 해설, 에디터, 저장 전환 팝업, 문제별 제출 체크, AI Assistant 패널 제공. |
| `practice.html` | 빈칸 채우기 기반 연습 모드. `js/practice-exercises.js`의 언어별 예약어/함수/메소드 문제를 풀고 정답을 즉시 확인. 진행 상태만 `practiceState_rocky_user` 임시 저장. |
| `result.html` | 결과 및 성과 분석. 점수 변동, 작성 코드 비교, AI 리뷰어 피드백 기능. |

---

## 5. 데이터 상태 관리 (상세는 localStorage_flow.md 참고)

서버 DB 연동 전 단계로, **브라우저의 `localStorage`**를 활용하여 다음과 같은 전역 상태를 관리합니다:
- **방 생성 및 생명주기**: `dynamicRooms`, `roomUsers`
- **배틀 및 문제 설정**: `battleProblems`, `battleSettings`, `battleProblemData`
- **배틀 진행 저장**: `battleDraft_*`, `battleDraftCode_*`, `battleDraftMeta_*`, `battleSubmittedProblems_*`
- **유저 데이터 및 골드/아이템**: `codeHistory_rocky_user` (PRACTICE 제외), `rocky_gold`, `rocky_items`
- **연습 모드 진행**: `practiceState_rocky_user` (현재 인덱스/답변/체크 상태, 코드 히스토리 저장 안 함)

(자세한 흐름은 `localStorage_flow.md` 파일 참조)

---

## 6. 향후 개선 과제
1. **WebSocket 도입**: `localStorage` 기반 상태 공유의 한계를 넘어 실시간 매칭 및 코드 동기화 구현.
2. **보안 강화**: Path Traversal 공격 방어 및 Docker 컨테이너 샌드박싱 추가 적용.
3. **DB 연동**: MySQL 등 RDBMS를 연결하여 유저 계정, 티어, 전적, 코드 히스토리를 서버로 이관.
4. **빌드 고도화**: Vite 또는 Next.js 기반으로 프론트엔드 아키텍처 개편.

---

## 7. 배틀 모드 확장 (일대다 / 아이템 시스템) — 최근 개발 완료

### 7.1 제약사항 및 전제
- 한국어 UI/설명
- 실매칭/WebSocket 없이 데모 AI 상대 먼저 구현
- **일대일 모드 흐름 변경 금지**, 일대다만 수정
- **10분 타이머 고정**, 모두 제출 시 즉시 전환, 시간 오버 시 강제 전환 — 절대 불변
- room/battle 한 화면, 페이지 스크롤 의존 안 함
- dirty detection: `answers.join('||') !== sessionSavedSnapshot` 직접 비교 유지
- 아이템은 게임당 각각 2회씩만 사용 가능, 제출 전/후 모두 사용 가능
- 섬광탄/연막탄 10초간 시각 효과, 수류탄 빈 줄로 변경, 특수기호 1개 추가/삭제
- 페인트: Canvas 2D 오버레이, 10초 지속, 왼쪽 위 집중 가림, 유기적 비사각형 형태
- 빌드제한은 상대 해당 문제 빌드 5회 제한(줄 선택 불필요)
- 아이템 적용 후 3초간 코드 노출 유지(확인 가능)
- 다음 문제 전환 팝업 3초 유지

### 7.2 완료된 기능

#### 상대 패널 다중 표시 (`battle.html`)
- `opponent-panels-container` 1열(2~4봇) / 2열(5+봇, `opponent-col` flex 분할)
- `count-2`: `calc(50%-2px)`, `count-3`: `calc(33.333%-3px)`, `count-4`: `calc(25%-3px)`
- 확대 모드: 선택 봇이 opponent 컬럼 전체 차지, `◀ BACK` 버튼으로 복귀
- 상대 패널 항상 클릭 가능(제출 전/후 무관)
- 확대 패널 코드 영역: 항상 줄 단위 `<div>` 렌더링(textarea 제거)
  - 비공개 시 CSS `filter: blur(1.6px)`로 전체 실루엣 표시
  - 섬광/연막/수류탄 효과가 블러 너머에서도 보임
  - `isTargetable`일 때만 hover/클릭 활성화
- `getModifiedCode()`로 아이템 코드 수정 반영
- `revealDemoCode`: 임계값 없이 항상 전체 코드 문자열 반환 (전체 실루엣용)

#### 봇 수 확장 (최대 8명 = 1인 + 7봇)
- `createDemoOpponentRoster`: `clamp(parsedMax - 1, 1, 7)`
- `demoBotPool`: 8개 프로필 상수 (8명 초과 시 순환)
- `room.html`: `parsedMaxPlayers` 기반 동적 플레이어 목록 + 입장 메시지
- `lobby.html`: maxPlayers 2~8 옵션

#### 아이템 시스템 (`battle.html`)
- **상태**: `itemInventory`, `attackState`, `opponentEffects`, `buildLimits`, `showItemModal`, `showSubItemModal`
- **인벤토리**: 라인/특수기호/빌드제한 각 2회씩, `localStorage.rocky_items`에 영속 저장
- **모달 구조**
  - 아이템 선택 모달: 💣 라인 / 🔣 특수기호 / 🚫 빌드제한 / 🎨 페인트 (아이콘 + 설명 + 남은 횟수)
  - 라인 서브 모달: 수류탄(💣 줄 삭제) / 연막탄(💨 10초 blur) / 섬광탄(💥 10초 깜빡) 3종 그리드
  - 특수기호 서브 모달: 추가/삭제 토글 + 28개 기호 버튼 그리드
- **아이템 효과 적용**
  - `opponentEffects[botId][problemIndex].codeMods`: 영구 텍스트 변경 (수류탄 삭제, 특수기호 추가/삭제)
  - `opponentEffects[botId][problemIndex].lineEffects`: 10초 CSS 효과 (연막/섬광), `expiresAt` 기준 렌더링
  - `opponentEffects[botId][problemIndex].panelEffect`: 10초 Canvas 2D 효과 (페인트), `{ type:'paint', colors, seed, expiresAt }`
  - 적용 후 3초간 `phase: 'applied'` + `revealTimer: 3` → 코드 노출
- **빌드제한**: 선택 즉시 적용, 코드 노출 없음 (🚫 아이콘만 표시)
- **효과 인디케이터**: 미니 패널 헤더 + 확대 패널 헤더에 모든 활성 효과 아이콘 동시 표시 (💨💥💣🔣🚫🎨)
  - `expiresAt` 기준 10초 경과 후 아이콘 자동 소멸

#### CSS 시각 효과
- `.line-smoke`: `filter: blur(3px)` + 회색 배경
- `.line-flash`: `@keyframes lineFlash` 0.5s 무한 (투명→흰색→노랑→흰색→투명), `font-weight: bold`
- `.line-deleted`: 빈 줄, 빨간색 + 투명도 40%
- `.line-target-hover`: 노란색 dashed 아웃라인
- `.mini-code-lines`: `.opponent-code-panel-mini.hidden` / `.revealed`에 blur 제어

#### 골드 시스템
- 골드 적립: `Math.floor(score / 10)`, `localStorage.rocky_gold`
- `lobby.html`에 `💰 아이템 & 골드` 패널: 보유 골드, 라인/특수기호/빌드제한/페인트 표시
- 결과 페이지 상단에 획득 골드 + 총 보유 골드 표시

#### 결과 페이지 (`result.html`)
- 개인전 등수제(1/N): `ranking-panel` 단일 패널, 1/2/3위 금/은/동 테두리
- 1/1 유지 (WIN/LOSE 분할)
- 점수 계산: `computeDemoScore` 시간 보너스 + 클리어 보너스, 1/1과 1/N 동일 공식
- 골드 적립 후 로비 인벤토리 동기화
- `PLAYER CODES` / `ONLINE USERS`: `flex: 1` 동일 높이, PLAYER CODES 제목 상단 고정 (스크롤 분리)

#### 버그 수정
- `room.html` `]);` 잔여 코드 삭제 (로비→룸 이동 실패)
- `battle.html` JSX 중첩 IIFE 제거 (Babel standalone 실패 원인)
- 효과 아이콘: 여러 개를 동시에 이어서 표시 (예: `💥🚫`)

#### 페인트 아이템 — Canvas 2D 오버레이 (`battle.html`)
- `PaintCanvasOverlay({ effect })` 컴포넌트: `effect.type === 'paint'` 시 Canvas 2D 오버레이 렌더링
- `buildParticles()`: 시드 기반 결정론적 파티클 생성
  - **impact blob 1개**: 중심점(`cx=w*0.15, cy=h*0.17`)에 가장 진한 덩어리 (alpha 0.94)
  - **main blobs 5개**: 중심에서 방사형으로 근접 배치 (각 `-0.85π~0.65π`)
  - **side clumps 10개**: 더 멀리 떨어진 작은 덩어리 (거리 8~28%)
  - **streaks 10개**: 중심에서 방사형으로 뻗어나가는 곡선 (길이 6~32%)
  - **droplets 30개**: 중심에서 비행하는 작은 타원 (거리 2~42%, 중력 하강 보정)
  - **drips 8개**: 중심 아래로만 배치, 항상 아래 방향으로 흘러내림
- 그리기 함수
  - `drawOrganicBlob(x,y,w,h,color,roughness,alpha)`: 16-point 유기적 다각형, hash 기반 jitter로 울퉁불퉁, `shadowBlur`로 입체감
  - `drawStreak(sx,sy,angle,len,w,color,alpha)`: quadraticCurveTo 곡선 스트로크 (방사형 스플래시 선)
  - `drawDrip(x,y,len,w,color,alpha)`: 선형 그라데이션 + quadraticCurveTo 눈물방울 (중력 흘러내림)
- 렌더링 레이어 (순서대로)
  1. Blur 언더레이어: `ctx.filter='blur(10px)'`로 impact+main blob 부드럽게
  2. 샤프 블롭: impact/main/side 순으로 선명하게
  3. Streaks: 50ms 지연 후 300ms 동안 방사형 발사 (easeOut)
  4. Droplets: 80ms 지연 후 350ms 동안 중심에서 비행
  5. Drips: 250ms 지연 후 900ms 동안 흘러내리기
  6. Glow: `screen` 블렌드 모드 방사형 그라데이션 (코드 가림 보조)
- 애니메이션 타이밍
  - `rush`: easeOut 곡선, 350ms 동안 0→1 (급격한 임팩트 느낌)
  - `dripT`: 250ms 지연 후 900ms 선형 (덩어리 먼저, 흘러내림 나중)
  - 10초 후 `Date.now() >= expiresAt` → 캔버스 clear → rAF 중단
- `resize` 이벤트에 `particlesRef` 리셋 + `devicePixelRatio` 보정
- JSX 3개 호출부: 확대 패널 / 미니 패널(2열) / 미니 패널(1열)

#### 연습모드 재구성 (`practice.html` + `js/practice-exercises.js`)
- **연습 문제 데이터**: `js/practice-exercises.js` (쉬움 12 / 보통 12 / 어려움 10 = 34문제)
  - 각 문제: `desc`에 `[1]` 빈칸, 언어별 `answer`(JAVA/PYTHON/CPP), `hint`, `explanation`
  - 예약어, 함수명, 메소드명, 연산자, 키워드 등 실습
- **UI 구조**
  - 문제 표시: `[1]` 부분을 styled blank-box로 시각화
  - 입력: `<input>` 필드에 정답 타이핑 (Enter로 정답 확인)
  - 정답 확인: 정답/오답 표시 + 정답 보여주기 + 해설 표시
  - 힌트 보기: 정답 확인 전에 힌트 노출 가능
  - 사이드바: 문제 목록 + O/X 정답/오답 상태 + 진행도 바
- **저장 정책**: `practiceState_rocky_user` 키로 진행 상태만 임시 저장 (코드 히스토리 저장 안 함)
- **로비**: `lobby.html`에서 `codeHistory_rocky_user` 읽을 때 `mode !== 'PRACTICE'` 필터링

### 7.3 핵심 설계 결정
- 3-column grid 구조 유지(사이드바|내 코드|상대 컨테이너), 상대 컬럼 내부만 변경
- 2열 기준: 상대 5명 이상(`battleBots.length >= 5`)
- 확대/축소는 opponent 컬럼 내부에서만 일어나 전체 레이아웃 불변
- `opponentEffects[botId][problemIndex].codeMods` + `lineEffects` 분리 저장
- 확대 패널: 항상 줄 단위 `<div>`로 코드 렌더링, `.hidden` 클래스로 CSS blur 제어
- `shouldAdvance = timeUp || (allBotsSolved && currentProblemLocked)` — 불변
- `allBotsSolved = activeBotStates.every(bot => bot.solved)` — `currentProblemLocked` 불포함
- 타이머 `const timeMin = 10` 강제 고정

### 7.4 남은 작업
1. 결과 페이지에서 opponentEffects 적용한 수정 코드 표시 (원본 + 수류탄/특수기호 반영)
2. `getPlayerCodeByProblem` fallback `opponentBattleCode` → 진짜 오류 메시지로 변경
3. 브라우저 전체 흐름 테스트(8명 1/N 배틀 → 아이템 사용 → 결과 → 로비)

### 7.5 주요 localStorage 키
| 키 | 용도 |
|----|------|
| `rocky_gold` | 보유 골드, 초기값 0 |
| `rocky_items` | 아이템 인벤토리: `{ line: 2, symbol: 2, buildLimit: 2, paint: 2 }` |
| `battleSubmission` | 최종 제출 데이터 (codes, problems, mode, maxPlayers) |
| `battleDemoState_{sessionId}` | 배틀 상태 스냅샷: `battleBots`, `remaining`, `currentIndex`, `answers` |
| `roomUsers` | UI 유저 리스트 (점수, solvedProblems, avatar) |
| `practiceState_rocky_user` | 연습모드 임시 상태: `diff`, `lang`, `currentIndex`, `answers`, `checked`, `hints` |
| `codeHistory_rocky_user` | 코드 히스토리 (로비에서 PRACTICE 모드는 필터링하여 표시) |

---

## 8. 데모 봇 운용 방식

### 8.1 봇 생성
- `demoBotPool`: 8개 프로필 상수
  - 알고리즘깎는노인(👴, brute/BASE), DP마스터(🧙, dp/MEMO), 그리디왕(🦊, greedy/FAST)
  - 자료구조봇(🤖, hash/HASH), 이분탐색요정(🧚, binary/BINARY), 큐러버(🐼, queue/QUEUE)
  - 백트래커(🐉, backtrack/DFS), 시뮬레이터(🐱, simulate/SIM)
- `createDemoOpponentRoster(roomMode, maxPlayers)`: 1/1이면 1명, 1/N이면 `clamp(maxPlayers-1, 1, 7)`명
- 8명 초과 시 풀을 순환하며 이름 뒤에 숫자 추가
- 각 봇은 고유 `id: bot-1..bot-7`, `style`, `tag`, `skill(0.55~0.95)`, `score(1000-index*35)` 보유

### 8.2 코드 생성
- `buildDemoCode(langKey, problem, bot, problemIndex)`: 언어별 템플릿 코드 + 봇 이름/스타일 주석
- `createDemoBattleRoster`: 모든 문제 × 모든 봇 코드를 2차원 배열(`codeByProblem[problemIndex]`)로 생성
- 코드는 생성 후 불변 (런타임 수정은 `opponentEffects`로 overlay)

### 8.3 풀이 시뮬레이션
- `buildDemoRoundPlan`: 시드 기반 난수(`createSeededRandom`)로 각 봇의 풀이 시간 계산
  - `baseDelay = 8 + rng()*10 + index*4` (인덱스가 클수록 느림)
  - `solveDelay = clamp(baseDelay + randomFactor*8 + slowTail, 6, maxSolveDelay)`
  - `solveAtRemaining = roundSeconds - solveDelay`
- "풀이 완료" = `remaining <= schedule` 조건, 실제 컴파일/실행 없음
- 1/1 vs 1/N: `fastBias(0.55 vs 0.45)`, `spread(0.35 vs 0.28)`로 난이도 조정
- 마지막 봇은 추가 지연(`slowTail: 12`)으로 가장 늦게 풂

### 8.4 상태 관리
- `battleBots`: 최초 1회 초기화 후 불변 (코드, 스케줄, 보너스 포함)
- `botSolves`: `remaining <= schedule` 충족 시마다 기록 (`{botId: [solvedIndices]}`)
- `botSolveRecordedRef`: 중복 기록 방지
- `currentBotViews`: `battleBots` + `remaining` 기반 매초 재계산 (상태/점수/코드 미리보기)

### 8.5 아이템 상호작용
- 봇은 직접 대응하지 않음, 플레이어 아이템만 `opponentEffects[botId][problemIndex]`에 저장
- `codeMods`: 수류탄 줄 삭제, 특수기호 추가/삭제 → `getModifiedCode()`에서 원본 코드에 overlay
- `lineEffects`: 섬광/연막 10초 CSS 효과 → `expiresAt` 기준으로 렌더링
- `panelEffect`: 페인트 10초 Canvas 2D 효과 → `{ type:'paint', colors, seed, expiresAt }` → `PaintCanvasOverlay`가 렌더링
- `buildLimits[botId][problemIndex]`: 빌드제한 횟수 추적 (실제 제한은 UI 표시용)

### 8.6 점수 계산
- `computeDemoScore(baseScore, solvedCount, remaining, roundTime, solvedThisRound)`
- `timeBonus = max(0, floor((remaining / roundTime) * 75))`
- `clearBonus = solvedThisRound ? 50 : 0`
- 총점 = `baseScore + solvedCount * 125 + timeBonus + clearBonus`

### 8.7 결과 페이지 전달
- 게임 종료 시 `persistBattleSubmission()` → `battleDemoState_.battleBots` 저장
- 결과 페이지: `demoState.battleBots` → `demoBots` → `getPlayerCodeByProblem(botId, problemIndex)`
- `allPlayers`: `roomUsers`(UI 데이터) + `demoBots`(코드 데이터) 병합 (중복 제거)
- 봇 코드는 `bot.codeByProblem[problemIndex]` 원본 코드 반환 (아이템 수정 미반영 — 남은 작업 #1)

### 8.8 주요 상태 키 (`battle.html`)
| 변수 | 설명 |
|------|------|
| `battleBots` | 봇 배열 (`id, name, avatar, skill, codeByProblem, solveScheduleByProblem`) |
| `battleRoundState` | 현재 라운드 계획 (`bots[].solveAtRemaining, bots[].code`) |
| `botSolves` | `{botId: [해결한 problemIndices]}` |
| `opponentEffects` | `{botId: {problemIndex: {codeMods, lineEffects}}}` |
| `buildLimits` | `{botId: {problemIndex: count}}` |
| `itemInventory` | `{line, symbol, buildLimit}` – 남은 사용 횟수 |
| `attackState` | `{active, phase, targetBotId, itemType, revealTimer, selectedLine}` |
| `expandedOpponentId` | 현재 확대된 봇 ID (null이면 축소 그리드) |

