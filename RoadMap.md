# 개발자 웹 이력서 개발 로드맵

## 기술 스택
- **HTML5** — 시맨틱 마크업 구조
- **CSS3** — 기본 스타일 및 애니메이션
- **JavaScript (ES6+)** — 인터랙션 및 동적 기능
- **Tailwind CSS** — 유틸리티 기반 스타일링

---

## 이력서 구성 섹션

### 1. Hero (소개)
- 이름, 직함 (예: Frontend Developer)
- 한 줄 자기소개
- 이메일, GitHub, LinkedIn 링크
- 프로필 사진 (선택)

### 2. About (자기소개)
- 3~4문장 분량의 짧은 소개
- 개발 철학 또는 강점

### 3. Skills (기술 스택)
- 언어: JavaScript, TypeScript, HTML, CSS
- 프레임워크: React, Vue.js
- 도구: Git, Figma, Webpack, Vite
- 인프라: AWS (기초), Docker (기초)

### 4. Experience (경력)
- 회사명, 재직 기간, 직책
- 주요 업무 및 성과 (bullet point 3~5개)
- 예시:
  - ABC 회사 | Frontend Developer | 2022.03 ~ 현재
  - XYZ 스타트업 | Web Developer | 2020.06 ~ 2022.02

### 5. Projects (프로젝트)
- 프로젝트명, 설명, 사용 기술, GitHub 링크
- 예시 3개:
  - 쇼핑몰 웹앱 (React, Node.js)
  - 날씨 대시보드 (JavaScript, REST API)
  - 포트폴리오 사이트 (HTML, CSS, JS)

### 6. Education (학력)
- 학교명, 전공, 졸업 연도

### 7. Contact (연락처)
- 이메일, GitHub, LinkedIn
- 간단한 문의 폼 (선택)

---

## 개발 단계

### Phase 1 — 프로젝트 세팅
- [ ] 폴더 구조 생성
- [ ] Tailwind CSS CDN 또는 CLI 세팅
- [ ] `index.html` 기본 템플릿 작성
- [ ] Google Fonts 연동 (예: Inter, Noto Sans KR)
- [ ] CSS 변수(Color Token) 정의

```
resume/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profile.jpg
│   └── icons/
└── tailwind.config.js (CLI 사용 시)
```

### Phase 2 — HTML 마크업
- [ ] `<header>` — Hero 섹션
- [ ] `<section id="about">` — 자기소개
- [ ] `<section id="skills">` — 기술 스택
- [ ] `<section id="experience">` — 경력
- [ ] `<section id="projects">` — 프로젝트
- [ ] `<section id="education">` — 학력
- [ ] `<section id="contact">` — 연락처
- [ ] `<footer>` — 저작권

### Phase 3 — Tailwind CSS 스타일링
- [ ] 반응형 레이아웃 (모바일 우선, `sm` / `md` / `lg` breakpoint)
- [ ] 컬러 팔레트 정의 (`tailwind.config.js` 또는 CDN config)
- [ ] Hero 배경 그라디언트
- [ ] 카드 컴포넌트 스타일 (프로젝트, 경력)
- [ ] Skill 배지 스타일 (`badge`, `pill` 형태)
- [ ] Hover / Focus 트랜지션 효과
- [ ] 다크모드 지원 (`dark:` 클래스)

### Phase 4 — JavaScript 인터랙션
- [ ] 모바일 햄버거 메뉴 토글
- [ ] 스무스 스크롤 (Scroll to section)
- [ ] 스크롤 진행 표시바 (상단)
- [ ] 섹션 등장 애니메이션 (Intersection Observer)
- [ ] 다크모드 토글 버튼
- [ ] 타이핑 효과 (Hero 직함 텍스트)
- [ ] 연락처 폼 유효성 검사 (선택)

### Phase 5 — 최적화 및 마무리
- [ ] 이미지 최적화 (WebP 변환, lazy loading)
- [ ] 시맨틱 HTML 검토 (접근성)
- [ ] Open Graph 메타태그 설정 (SNS 공유용)
- [ ] Favicon 설정
- [ ] Lighthouse 점수 확인 (Performance, Accessibility, SEO)
- [ ] 크로스 브라우저 테스트 (Chrome, Safari, Firefox)

### Phase 6 — 배포
- [ ] GitHub Pages 또는 Vercel로 배포
- [ ] 커스텀 도메인 연결 (선택)
- [ ] README.md 작성

---

## 디자인 가이드

### 컬러 팔레트 (예시)
| 역할 | 라이트 모드 | 다크 모드 |
|------|------------|----------|
| Primary | `#6366f1` (Indigo) | `#818cf8` |
| Background | `#ffffff` | `#0f172a` |
| Surface | `#f8fafc` | `#1e293b` |
| Text | `#1e293b` | `#e2e8f0` |
| Accent | `#06b6d4` (Cyan) | `#22d3ee` |

### 타이포그래피
- 제목: `font-bold`, `text-3xl` ~ `text-5xl`
- 본문: `text-base`, `leading-relaxed`
- 폰트: `Inter` (영문) + `Noto Sans KR` (한글)

### 레이아웃
- 최대 너비: `max-w-4xl mx-auto`
- 섹션 패딩: `py-16 px-4`
- 그리드: 기술 스택 `grid-cols-2 md:grid-cols-4`, 프로젝트 `grid-cols-1 md:grid-cols-2`

---

## 예상 일정

| 단계 | 작업 | 예상 시간 |
|------|------|----------|
| Phase 1 | 세팅 | 0.5일 |
| Phase 2 | HTML 마크업 | 1일 |
| Phase 3 | Tailwind 스타일링 | 1.5일 |
| Phase 4 | JS 인터랙션 | 1일 |
| Phase 5 | 최적화 | 0.5일 |
| Phase 6 | 배포 | 0.5일 |
| **합계** | | **약 5일** |

---

## 참고 사항
- Tailwind CSS CDN 사용 시 `<script src="https://cdn.tailwindcss.com"></script>` 추가
- CLI 사용 시 `npm install -D tailwindcss` 후 `npx tailwindcss init`
- 애니메이션은 CSS `@keyframes` 또는 Tailwind `animate-*` 클래스 활용
- 반응형 우선 개발 (모바일 → 태블릿 → 데스크탑)
