# Maker | Prompt Collection

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)
![License](https://img.shields.io/badge/License-MIT-green)

> AI 프롬프트를 큐레이션하고 공유하는 미니멀 포트폴리오 사이트

**Live**: [https://ksh0660.github.io](https://ksh0660.github.io)

---

## Description

매일 사용하는 AI 프롬프트를 한곳에 모아 관리하고, 누구나 쉽게 복사해서 쓸 수 있도록 만든 **프롬프트 컬렉션 사이트**입니다.

- 카테고리별 필터링으로 원하는 프롬프트를 빠르게 탐색
- 클릭 한 번으로 전체 프롬프트 텍스트를 클립보드에 복사
- 외부 라이브러리 없이 React + CSS Modules로 구현한 가벼운 정적 사이트

---

## Core Features

| Feature | Description |
|---------|-------------|
| **프롬프트 갤러리** | 카드 레이아웃으로 프롬프트를 한눈에 탐색 |
| **카테고리 필터** | 카테고리 버튼으로 원하는 분류만 빠르게 필터링 |
| **상세 모달** | 네이티브 `<dialog>` 기반 모달에서 프롬프트 전문 확인 |
| **원클릭 복사** | Clipboard API를 활용한 프롬프트 즉시 복사 |
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
│   ├── PromptGallery.tsx   # 갤러리 (필터링 + 상태 관리)
│   ├── PromptCard.tsx      # 프롬프트 카드
│   └── PromptModal.tsx     # 상세 보기 모달
├── data/
│   └── prompts.ts          # 프롬프트 데이터 + 타입 정의
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
push to main → GitHub Actions → npm ci → npm run build → ./out → GitHub Pages
```

워크플로우 설정: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

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
