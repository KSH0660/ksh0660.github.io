# Sunho Kim — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)
![License](https://img.shields.io/badge/License-MIT-green)

> AI 엔지니어 김선호의 개인 포트폴리오 사이트

**Live**: [https://ksh0660.github.io](https://ksh0660.github.io)

---

## Description

agentic 시스템을 만들고 사이드 프로젝트를 출시하는 AI 엔지니어의 **개인 포트폴리오 사이트**입니다.

- Bento 그리드 레이아웃으로 출시한 프로젝트들을 한눈에 소개
- 각 프로젝트의 개발 기간(시작일~종료일)을 GitHub API로 자동 표기
- 경력/학력 타임라인(Journey) 제공
- 외부 라이브러리 없이 React + CSS Modules로 구현한 가벼운 정적 사이트

---

## Core Features

| Feature | Description |
|---------|-------------|
| **Hero** | 자기소개 + 외부 링크 (GitHub, LinkedIn 등) |
| **What I Build** | Bento 그리드 레이아웃의 프로젝트 카드 |
| **프로젝트 기간 자동 표기** | GitHub API로 레포 생성일~최신 커밋 날짜 자동 조회, 카드에 표시 |
| **Journey** | 경력/학력 타임라인 |
| **테마 토글** | 라이트/다크 모드 전환 |
| **반응형 UI** | 모바일/데스크톱 대응 CSS Grid 레이아웃 |
| **정적 배포** | Next.js Static Export → GitHub Pages 자동 배포 |

---

## Getting Started

### 요구 사항

- **Node.js** 20 이상
- **npm** (Node.js에 포함)

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/ksh0660/ksh0660.github.io.git
cd ksh0660.github.io

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하면 사이트를 확인할 수 있습니다.

### 빌드

```bash
# 정적 사이트 빌드 (./out 디렉토리에 출력)
npm run build
```

---

## Directory Structure

```
ksh0660.github.io/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, OG 태그)
│   ├── page.tsx            # 메인 페이지
│   ├── globals.css         # 디자인 토큰 + 글로벌 스타일
│   └── page.module.css     # 페이지 스타일
├── components/             # React 컴포넌트
│   ├── Hero.tsx            # 히어로 섹션
│   ├── BentoGrid.tsx       # 프로젝트 그리드
│   ├── BentoCard.tsx       # 프로젝트 카드 (기간 표시 포함)
│   ├── Journey.tsx         # 경력/학력 타임라인
│   └── ThemeToggle.tsx     # 라이트/다크 테마 토글
├── data/
│   ├── projects.ts         # 프로젝트 데이터 (repo 정보 포함)
│   ├── projectDurations.ts # [자동 생성] 프로젝트 기간 데이터
│   └── journey.ts          # 경력/학력 타임라인 데이터
├── scripts/
│   └── fetch-project-durations.mjs  # prebuild 스크립트
├── public/                 # 정적 에셋
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages 자동 배포 워크플로우
├── next.config.ts          # Next.js 설정 (Static Export)
├── tsconfig.json           # TypeScript 설정 (strict mode)
└── package.json            # 의존성 및 스크립트
```

---

## Environment Variables

현재 이 프로젝트는 **환경 변수가 필요하지 않습니다**.

외부 API나 백엔드 없이 순수 정적 사이트로 동작합니다. 향후 API 연동이 추가될 경우 이 섹션이 업데이트됩니다.

---

## Deployment

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 배포를 수행합니다.

```
push to main → GitHub Actions → npm ci → prebuild (GitHub API fetch) → next build → ./out → GitHub Pages
```

`prebuild` 단계에서 GitHub REST API를 호출하여 각 프로젝트의 개발 기간(시작일~종료일)을 자동으로 가져옵니다.

워크플로우 설정: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

---

## 프로젝트 추가 방법

`data/projects.ts`에 새 항목을 추가하면 됩니다. `repo` 필드를 포함하면 빌드 시 개발 기간이 자동으로 표시됩니다.

```typescript
{
  id: "new-project",
  title: "New Project",
  category: "Service",
  description: "프로젝트 설명",
  url: "https://deployed-service.com",           // 서비스 링크
  repo: { owner: "KSH0660", name: "RepoName" },  // GitHub 레포 → 기간 자동 생성
  size: "medium",
}
```

- `repo` 필드 포함 시: 카드에 `YYYY.MM.DD ~ YYYY.MM.DD (N일간)` 자동 표시
- `repo` 필드 미포함 시: 기간 미표시 (정상 동작)

---

## Tech Stack

- **Next.js 15** — App Router, Static Export
- **React 19** — Server/Client Components
- **TypeScript 5** — strict mode
- **CSS Modules** — 컴포넌트 스코프 스타일링
- **CSS Custom Properties** — 디자인 토큰 관리
- **GitHub Actions** — CI/CD 자동 배포

---

## License

MIT
