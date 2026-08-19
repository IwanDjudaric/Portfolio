import { useEffect, useRef, useState } from 'react'
import { LOCALES, copy, projectMeta } from './copy'
import './App.css'

const STORAGE_KEY = 'lang'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const hasFinePointer = () => window.matchMedia('(pointer: fine)').matches

/* Stored choice first, then the browser's own preference, then English. */
const initialLocale = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (LOCALES.includes(saved)) return saved
  return navigator.language?.toLowerCase().startsWith('nl') ? 'nl' : 'en'
}

/* Reveals every [data-reveal] element once, then stops observing it. */
function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* Writes normalised pointer offsets (-0.5..0.5) to --px / --py on the element. */
function usePointerTilt(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !hasFinePointer()) return

    let frame = 0
    let next = null

    const flush = () => {
      frame = 0
      el.style.setProperty('--px', next.x.toFixed(3))
      el.style.setProperty('--py', next.y.toFixed(3))
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      next = {
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      }
      if (!frame) frame = requestAnimationFrame(flush)
    }

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      el.style.setProperty('--px', '0')
      el.style.setProperty('--py', '0')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [ref])
}

/* One delegated listener that tilts whichever row the cursor is over. */
function useRowTilt(ref) {
  useEffect(() => {
    const list = ref.current
    if (!list || prefersReducedMotion() || !hasFinePointer()) return

    let frame = 0
    let next = null
    let active = null

    const reset = (row) => {
      if (!row) return
      row.style.setProperty('--px', '0')
      row.style.setProperty('--py', '0')
    }

    const flush = () => {
      frame = 0
      if (!active) return
      active.style.setProperty('--px', next.x.toFixed(3))
      active.style.setProperty('--py', next.y.toFixed(3))
    }

    const onMove = (e) => {
      const row = e.target.closest('li')
      if (row !== active) {
        reset(active)
        active = row
      }
      if (!row) return
      const r = row.getBoundingClientRect()
      next = {
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      }
      if (!frame) frame = requestAnimationFrame(flush)
    }

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      reset(active)
      active = null
    }

    list.addEventListener('pointermove', onMove)
    list.addEventListener('pointerleave', onLeave)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      list.removeEventListener('pointermove', onMove)
      list.removeEventListener('pointerleave', onLeave)
    }
  }, [ref])
}

function LangToggle({ locale, onChange, title }) {
  return (
    <div className="lang-toggle glass" role="group" aria-label={title}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn mono${code === locale ? ' is-active' : ''}`}
          aria-pressed={code === locale}
          lang={code}
          onClick={() => onChange(code)}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

function App() {
  const heroRef = useRef(null)
  const workListRef = useRef(null)
  const [locale, setLocale] = useState(initialLocale)

  useScrollReveal()
  usePointerTilt(heroRef)
  useRowTilt(workListRef)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const t = copy[locale]
  const projects = projectMeta.map((p, i) => ({ ...p, ...t.projects[i] }))

  return (
    <>
      <div className="ambience" aria-hidden="true">
        <span className="glow glow-a" />
        <span className="glow glow-b" />
      </div>

      <header id="nav">
        <a className="mark" href="#top">
          Iwan Djudaric
        </a>
        <div className="nav-right">
          <nav>
            <a href="#work">{t.nav.work}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <LangToggle
            locale={locale}
            onChange={setLocale}
            title={t.langToggle}
          />
        </div>
      </header>

      <hr className="rule" />

      <section id="hero" ref={heroRef}>
        <div className="hero-inner">
          <span className="index-label mono" data-reveal>
            {t.hero.index}
          </span>
          <h1 data-reveal style={{ '--i': 1 }}>
            Iwan Djudaric
            <br />
            {t.hero.role}
          </h1>
          <p className="lede" data-reveal style={{ '--i': 2 }}>
            {t.hero.lede}
          </p>
          <div className="hero-meta" data-reveal style={{ '--i': 3 }}>
            <span className="mono">{t.hero.based}</span>
          </div>
        </div>
      </section>

      <div className="tick"></div>

      <section id="work">
        <div className="section-head" data-reveal>
          <h2 className="mono">{t.work.index}</h2>
          <span className="grey mono">{t.work.sub}</span>
        </div>
        <ul className="work-list" ref={workListRef}>
          {projects.map((p, i) => (
            <li key={p.n} className="glass" data-reveal style={{ '--i': i }}>
              <span className="w-n mono">{p.n}</span>
              <span className="w-title">{p.title}</span>
              <span className="w-tag mono">{p.tag}</span>
              <span className="w-year mono">{p.year}</span>
              <div className="w-detail">
                <p>{p.desc}</p>
                <span className="w-tech mono">{p.tech}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="tick"></div>

      <section id="about">
        <div className="section-head" data-reveal>
          <h2 className="mono">{t.about.index}</h2>
        </div>
        <div className="about-grid">
          <p className="about-text" data-reveal>
            {t.about.text}
          </p>
          <dl className="facts glass" data-reveal style={{ '--i': 1 }}>
            {t.about.facts.map((f) => (
              <div key={f.term}>
                <dt className="mono">{f.term}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="tick"></div>

      <footer id="contact">
        <div className="section-head" data-reveal>
          <h2 className="mono">{t.contact.index}</h2>
        </div>
        <a
          className="contact-line"
          href="mailto:djudariciwan@gmail.com"
          data-reveal
        >
          djudariciwan@gmail.com
        </a>
        <div className="footer-bottom" data-reveal style={{ '--i': 1 }}>
          <div className="socials mono">
            <a href="https://www.linkedin.com/in/iwan-djudaric-3443053a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/IwanDjudaric" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
