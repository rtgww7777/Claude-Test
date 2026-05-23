# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

순수 HTML/CSS/JavaScript + Tailwind CSS로 만드는 **개발자 웹 이력서** 프로젝트입니다. 빌드 도구 없이 브라우저에서 직접 열거나, Tailwind CLI를 사용할 수 있습니다.

## 실행 방법

### CDN 방식 (빌드 없음)
```bash
open index.html   # macOS
```
또는 Live Server (VS Code 확장)로 열기.

### Tailwind CLI 방식
```bash
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./style.css -o ./dist/output.css --watch
```
`index.html`에서 `dist/output.css`를 참조하도록 변경.

## 파일 구조

```
resume/
├── index.html          # 단일 페이지, 모든 섹션 포함
├── style.css           # 커스텀 CSS (Tailwind @layer, @keyframes)
├── script.js           # 인터랙션 (스크롤, 다크모드, 타이핑 효과)
├── assets/
│   ├── profile.jpg
│   └── icons/
└── tailwind.config.js  # CLI 사용 시만 필요
```

## 아키텍처

### HTML 섹션 순서
`index.html`은 단일 파일로 아래 순서로 섹션이 구성됩니다:
1. `<header>` — 네비게이션 + 다크모드 토글
2. `#hero` — 이름, 직함, 소개, 링크
3. `#about` — 자기소개
4. `#skills` — 기술 스택 배지
5. `#experience` — 경력 타임라인
6. `#projects` — 프로젝트 카드 그리드
7. `#education` — 학력
8. `#contact` — 연락처 / 폼
9. `<footer>`

### JavaScript (`script.js`) 주요 기능
- **Intersection Observer** — 섹션 진입 시 `opacity-0 → opacity-100` 등장 애니메이션
- **다크모드** — `document.documentElement.classList.toggle('dark')` + `localStorage` 유지
- **타이핑 효과** — Hero 직함 텍스트를 배열로 순환 출력
- **스크롤 진행바** — `window.scrollY / document.body.scrollHeight`로 상단 바 너비 계산
- **햄버거 메뉴** — 모바일 nav 토글

### Tailwind 설계 원칙
- **모바일 우선**: 기본 클래스 → `md:` → `lg:` 순으로 확장
- **다크모드**: `darkMode: 'class'` 전략 사용 (`dark:` 접두어)
- **컬러 토큰**: Primary `#6366f1` (Indigo), Accent `#06b6d4` (Cyan)
- **최대 너비**: `max-w-4xl mx-auto`, 섹션 패딩 `py-16 px-4`
- **카드**: `rounded-2xl shadow-md hover:shadow-xl transition` 패턴 통일

## 디자인 시스템

| 역할 | 라이트 | 다크 |
|------|--------|------|
| Primary | `#6366f1` | `#818cf8` |
| Background | `#ffffff` | `#0f172a` |
| Surface | `#f8fafc` | `#1e293b` |
| Text | `#1e293b` | `#e2e8f0` |
| Accent | `#06b6d4` | `#22d3ee` |

폰트: `Inter` (영문), `Noto Sans KR` (한글) — Google Fonts CDN.

## 배포

```bash
# GitHub Pages
git init && git add . && git commit -m "init"
git remote add origin <repo-url>
git push -u origin main
# GitHub 저장소 Settings → Pages → Branch: main / root

# Vercel
npx vercel
```
