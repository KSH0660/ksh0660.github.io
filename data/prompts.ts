export interface Prompt {
  id: string;
  title: string;
  category: string;
  description: string;
  prompt: string;
}

export const categories = ["All", "Documentation"] as const;

export const prompts: Prompt[] = [
  {
    id: "claude-readme-generator",
    title: "CLAUDE.md & README.md 자동 생성",
    category: "Documentation",
    description:
      "AI 에이전트용 CLAUDE.md와 휴먼 개발자용 README.md를 프로젝트 분석 후 자동 생성하는 프롬프트.",
    prompt: `[작업 목표]
현재까지 개발된 '5축 스펙트럼 기반 심리 테스트' 프로젝트를 바탕으로, AI 코딩 에이전트를 위한 \`CLAUDE.md\` 파일과 휴먼 개발자를 위한 \`README.md\` 파일을 각각 작성해 줘.

[1. CLAUDE.md (For AI Agent) 작성 가이드]
이 파일은 앞으로 네가 코드를 수정하거나 추가할 때 반드시 먼저 읽고 지켜야 할 '절대 규칙(System Prompt)' 역할을 할 거야. 아래 내용을 포함해서 마크다운으로 작성해 줘.
- Project Context: 이 프로젝트의 목적 (점수제가 아닌 5축 스펙트럼 기반 심리 분석)
- Tech Stack: 현재 사용 중인 프론트엔드/백엔드 기술 스택 명시
- Architecture & Data Flow: 데이터가 어떻게 흘러가는지 (예: 문항 응답 -> 가중치/역배점 계산 로직 -> % 스펙트럼 변환 -> UI 렌더링)
- Strict Coding Rules:
  1) 기존의 계산 로직(가중치, 역배점 처리)을 임의로 삭제하거나 단순 합산으로 되돌리지 말 것
  2) UI 컴포넌트 수정 시 스펙트럼(양극단) 레이아웃을 유지할 것
  3) 모르는 것이 있거나 기획적 판단이 필요하면 코드를 마음대로 짜지 말고 반드시 사용자에게 질문할 것
  4) (그 외 네가 코드를 짜면서 지켜야 할 코드 컨벤션이나 타입스크립트 엄격성 규칙 추가)

[2. README.md (For Human User) 작성 가이드]
이 파일은 깃허브 레포지토리 메인에 올라갈 표준 문서야. 깔끔하고 가독성 좋게 작성해 줘.
- Project Title & Badges: 프로젝트 이름과 사용된 기술 스택 뱃지
- Description: 단순 점수제 심리 테스트의 한계를 극복하기 위해 만든 'MBTI형 5축 스펙트럼 심리 테스트'라는 기획 의도 설명
- Core Features: 주요 기능 요약 (스펙트럼 UI, 동적 점수 계산 로직 등)
- Getting Started: 로컬 환경에서 설치하고 실행하는 방법 (npm install, npm run dev 등)
- Directory Structure: 핵심 폴더 구조 설명
- Environment Variables: 필요한 환경 변수(.env) 세팅 안내 (있을 경우)

두 파일의 초안을 각각 코드 블록으로 나누어서 출력해 줘.`,
  },
  {
    id: "claude-readme-updater",
    title: "CLAUDE.md & README.md 동기화 업데이트",
    category: "Documentation",
    description:
      "최근 개발 변경사항을 분석하여 기존 CLAUDE.md와 README.md를 최신 상태로 동기화하는 프롬프트.",
    prompt: `[작업 목표]
최근 진행된 개발 내용과 현재 코드베이스의 상태를 분석하여, 기존에 작성된 \`claude.md\` (AI 지침서)와 \`README.md\` (사용자 안내서)를 최신 상태로 업데이트(Sync)해 줘.

[작업 프로세스]
1. 분석 (Analyze):
   - 현재 프로젝트의 디렉토리 구조, 패키지 의존성(package.json 등), 그리고 최근 추가되거나 수정된 핵심 파일들(예: API 연동 로직, 새로운 UI 컴포넌트 등)을 스캔해.
   - 기존 \`claude.md\`와 \`README.md\`의 내용을 읽고, 현재 코드 구현 상태와 불일치하는 부분(Outdated context)을 찾아내.

2. \`claude.md\` 업데이트 (For AI):
   - Project Context & Architecture: 새롭게 추가된 데이터 흐름이나 기능(예: LLM 연동, 이미지 공유 등)을 반영해 아키텍처 설명을 수정해.
   - Tech Stack: 새로 도입된 라이브러리나 툴이 있다면 추가해.
   - Strict Coding Rules: 최근 작업 중 발생했던 오류를 방지하기 위해 네가 스스로 깨달은 '새로운 코딩 제약 사항'이나 '반드시 지켜야 할 타입스크립트/아키텍처 규칙'을 1~2개 추가해.

3. \`README.md\` 업데이트 (For Human):
   - Core Features: 최근 성공적으로 구현된 기능들을 '주요 기능' 목록에 추가해.
   - Getting Started / Env Variables: 로컬 실행 방법이 바뀌었거나, 새로 추가된 환경 변수(예: OPENAI_API_KEY)가 있다면 반드시 명시해 줘.

[출력 규칙]
- 두 파일의 전체 내용을 수정된 마크다운 코드 블록 형식으로 각각 출력해 줘.
- 어떤 부분을 왜 수정하고 추가했는지, 수정 내역(Changelog)을 간단히 요약해서 먼저 설명해 줘.`,
  },
];
