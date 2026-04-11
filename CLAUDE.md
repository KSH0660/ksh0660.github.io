# CLAUDE.md — AI Agent System Prompt

> 이 파일은 AI 코딩 에이전트(Claude 등)가 이 프로젝트의 코드를 수정하거나 추가할 때
> **반드시 먼저 읽고 지켜야 할 절대 규칙**입니다.

---

## 1. Project Context

- **프로젝트명**: Maker | Prompt Collection
- **목적**: AI 프롬프트를 큐레이션하여 공유하는 정적 포트폴리오 사이트
- **핵심 가치**: 프롬프트를 카테고리별로 탐색하고, 모달에서 전문을 확인한 뒤 클립보드에 복사할 수 있는 심플한 UX 제공
- **배포 방식**: GitHub Pages 정적 호스팅 (Next.js Static Export)
- **사이트 URL**: https://ksh0660.github.io

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | ^15.3.1 |
| UI Library | React | ^19.1.0 |
| Language | TypeScript (strict mode) | ^5.8.0 |
| Styling | CSS Modules + CSS Custom Properties | — |
| Build Output | Static Export (`output: "export"`) | — |
| Deployment | GitHub Actions → GitHub Pages | Node 20 |
| Font | Inter (sans), JetBrains Mono (mono) | — |

**사용하지 않는 것들**: 외부 UI 라이브러리 없음, 상태 관리 라이브러리 없음, 백엔드/API 없음, Tailwind CSS 없음.

---

## 3. Architecture & Data Flow

```
data/prompts.ts          — 프롬프트 원본 데이터 (Prompt[] 배열, 카테고리 목록)
        │
        ▼
components/PromptGallery.tsx  — 카테고리 필터링 + 프롬프트 선택 상태 관리
        │                        (Client Component, useState)
        ├──▶ components/PromptCard.tsx   — 개별 카드 렌더링 (Static)
        │
        └──▶ components/PromptModal.tsx  — <dialog> 기반 모달
                                           프롬프트 전문 표시 + 클립보드 복사
                                           (Client Component, useRef/useEffect)
```

```
data/projects.ts         — 프로젝트 원본 데이터 (Project[] 배열, repo 정보 포함)
        │
        ├──▶ [prebuild] scripts/fetch-project-durations.mjs
        │       GitHub REST API로 repo의 created_at + 최신 커밋 날짜 조회
        │       → data/projectDurations.ts 자동 생성
        │
        ▼
components/BentoGrid.tsx      — projects + projectDurations 병합
        │
        └──▶ components/BentoCard.tsx   — 프로젝트 카드 렌더링
                                          제목 아래에 기간 표시 (YYYY.MM.DD ~ YYYY.MM.DD (N일간))
```

### 상세 데이터 흐름

**프롬프트 흐름:**

1. `data/prompts.ts`에서 `prompts` 배열과 `categories` 튜플을 export
2. `PromptGallery`가 데이터를 import하고, `activeCategory` 상태로 필터링
3. 필터링된 프롬프트 목록을 `PromptCard` 컴포넌트로 렌더링
4. 사용자가 카드를 클릭하면 `selectedPrompt` 상태가 설정됨
5. `PromptModal`이 `selectedPrompt` prop을 받아 `<dialog>` API로 모달 표시
6. 복사 버튼 클릭 → `navigator.clipboard.writeText()` → "Copied!" 피드백 (2초)

**프로젝트 Duration 흐름:**

1. `npm run build` 시 `prebuild` 스크립트가 자동 실행
2. `scripts/fetch-project-durations.mjs`가 `data/projects.ts`에서 `repo` 필드를 파싱
3. 각 프로젝트의 GitHub REST API를 호출하여 `created_at`(시작일)과 최신 커밋 날짜(종료일) 조회
4. 결과를 `data/projectDurations.ts`에 기록 (API 실패 시 빈 맵, 빌드 중단 없음)
5. `BentoGrid`가 `projects`와 `projectDurations`를 병합하여 `BentoCard`에 전달
6. `BentoCard`가 `duration`이 존재할 경우 `YYYY.MM.DD ~ YYYY.MM.DD (N일간)` 형태로 표시

---

## 4. Directory Structure

```
/
├── app/
│   ├── layout.tsx          # Root Layout (메타데이터, OG 태그)
│   ├── page.tsx            # 메인 페이지 (Hero + Gallery + Footer)
│   ├── globals.css         # CSS 변수(디자인 토큰) + 글로벌 리셋
│   └── page.module.css     # 페이지 레벨 스타일
├── components/
│   ├── Hero.tsx / .module.css
│   ├── BentoGrid.tsx / BentoCard.tsx / .module.css
│   ├── PromptGallery.tsx / .module.css
│   ├── PromptCard.tsx / .module.css
│   └── PromptModal.tsx / .module.css
├── data/
│   ├── prompts.ts          # 프롬프트 데이터 + TypeScript 타입
│   ├── projects.ts         # 프로젝트 데이터 (repo 필드 포함)
│   ├── projectDurations.ts # [자동 생성] 프로젝트 기간 데이터
│   └── journey.ts          # 경력/학력 타임라인 데이터
├── scripts/
│   └── fetch-project-durations.mjs  # prebuild: GitHub API → 기간 데이터 생성
├── public/
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages 자동 배포
├── next.config.ts          # Static Export 설정
├── tsconfig.json           # TypeScript strict 설정
└── package.json
```

---

## 5. Strict Coding Rules

### 5-1. 아키텍처 규칙

1. **데이터와 UI를 분리할 것**: 프롬프트 데이터는 `data/prompts.ts`, 프로젝트 데이터는 `data/projects.ts`에서 관리한다. 컴포넌트 내부에 하드코딩하지 않는다. `data/projectDurations.ts`는 자동 생성 파일이므로 직접 수정하지 않는다.
2. **Client/Server 컴포넌트 경계를 유지할 것**: `"use client"` 디렉티브는 상태(useState, useEffect 등)가 필요한 컴포넌트에만 사용한다. `Hero`, `PromptCard`처럼 순수 렌더링 컴포넌트는 Server Component로 유지한다.
3. **CSS Modules 패턴을 유지할 것**: 인라인 스타일이나 외부 CSS 프레임워크를 도입하지 않는다. 모든 컴포넌트는 `.module.css` 파일을 갖는다. 디자인 토큰은 `globals.css`의 CSS Custom Properties를 사용한다.
4. **정적 빌드 호환성을 유지할 것**: `output: "export"` 설정 하에서 동작해야 하므로, 서버 사이드 API 라우트(`app/api/`), 동적 라우팅의 서버 기능, `next/headers`, `next/cookies` 등은 사용할 수 없다.

### 5-2. TypeScript 규칙

5. **strict 모드를 준수할 것**: `tsconfig.json`에 `"strict": true`가 설정되어 있다. `any` 타입 사용 금지, `null`/`undefined` 명시적 처리 필수.
6. **인터페이스를 먼저 정의할 것**: 새로운 데이터 구조를 추가할 때는 반드시 `interface` 또는 `type`을 먼저 정의하고, 해당 타입을 export하여 컴포넌트에서 import하여 사용한다.
7. **Props 타입을 명시할 것**: 모든 컴포넌트의 Props는 `interface Props`로 정의한다.

### 5-3. 절대 금지 사항

8. **기존 `<dialog>` 기반 모달 패턴을 임의로 변경하지 말 것**: `PromptModal`은 네이티브 `<dialog>` API를 사용하며, 이는 접근성(Escape 키 닫기, 포커스 트래핑)을 위한 의도적 설계이다.
9. **카테고리 필터링 로직을 제거하지 말 것**: `PromptGallery`의 `activeCategory` 기반 필터링은 핵심 기능이다.
10. **기획적 판단이 필요한 경우 임의로 구현하지 말 것**: 새로운 기능 추가, UX 변경, 데이터 구조 변경 등 기획적 판단이 필요한 상황에서는 반드시 사용자에게 먼저 질문한다.

### 5-4. 코드 컨벤션

11. **네이밍**: 컴포넌트는 PascalCase, 파일명은 컴포넌트와 동일, CSS 클래스는 camelCase (CSS Modules 관례).
12. **import 순서**: React/Next.js → 외부 라이브러리 → 내부 모듈(`@/`) → 스타일 순으로 정렬한다.
13. **불필요한 의존성 추가 금지**: 이 프로젝트는 최소 의존성을 지향한다. 새 패키지를 추가하기 전에 반드시 사용자의 승인을 받는다.

---

## 6. Build & Deploy

```bash
npm run dev      # 로컬 개발 서버 (http://localhost:3000)
npm run build    # prebuild(GitHub API fetch) + 정적 빌드 → ./out 디렉토리 생성
npm run start    # 프로덕션 서버 (로컬 테스트용)
```

- `main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 GitHub Pages 배포를 수행한다.
- `npm run build` 실행 시 `prebuild` 스크립트가 먼저 실행되어 GitHub API에서 프로젝트 기간 데이터를 가져온다.
- 빌드 결과물은 `./out` 디렉토리에 정적 HTML/CSS/JS로 생성된다.

---

## 7. 프로젝트 추가 가이드

새 프로젝트를 추가할 때는 `data/projects.ts`에 항목을 추가하기만 하면 된다. `repo` 필드를 포함하면 CI/CD 빌드 시 GitHub API에서 자동으로 기간(시작일~종료일, 소요 일수)이 계산된다.

```typescript
// data/projects.ts
{
  id: "new-project",
  title: "New Project",
  category: "Service",
  description: "프로젝트 설명",
  url: "https://deployed-service.com",        // 서비스 링크
  repo: { owner: "KSH0660", name: "RepoName" }, // GitHub 레포 → 기간 자동 생성
  size: "medium",
}
```

- `repo` 필드가 있으면 → 빌드 시 `YYYY.MM.DD ~ YYYY.MM.DD (N일간)` 자동 표시
- `repo` 필드가 없으면 → 기간 미표시 (정상 동작)
- `data/projectDurations.ts`는 **자동 생성 파일**이므로 직접 수정하지 말 것
