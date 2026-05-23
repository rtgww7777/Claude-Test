const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
const SUN_ICON  = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;

function initDarkMode() {
  const toggle = document.getElementById('theme-toggle');
  const html   = document.documentElement;

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    html.classList.add('dark');
  }

  function updateIcon() {
    toggle.innerHTML = html.classList.contains('dark') ? SUN_ICON : MOON_ICON;
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    updateIcon();
  });
}

function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const titles = [
    'Frontend Developer',
    'React Engineer',
    'UI/UX Enthusiast',
    'Full-Stack Developer',
    'Open Source Contributor',
  ];
  let titleIdx = 0;
  let charIdx  = 0;
  let deleting = false;

  function tick() {
    const current = titles[titleIdx];
    if (deleting) {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
    }

    let delay = deleting ? 45 : 95;

    if (!deleting && charIdx === current.length) {
      delay = 2200;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting  = false;
      titleIdx  = (titleIdx + 1) % titles.length;
      delay     = 400;
    }

    setTimeout(tick, delay);
  }
  tick();
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function update() {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
  }
  window.addEventListener('scroll', update, { passive: true });
}

function initScrollAnimation() {
  const els = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
  );
  els.forEach(el => observer.observe(el));
}

function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('header nav a[href^="#"]');
  const mobileLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');

  function highlight() {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    [...navLinks, ...mobileLinks].forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }
  window.addEventListener('scroll', highlight, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initTypingEffect();
  initScrollProgress();
  initScrollAnimation();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
});
