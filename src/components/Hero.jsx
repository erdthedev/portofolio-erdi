import Hero3D from './Hero3D.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-content">
        <p className="eyebrow reveal">
          {profile.location}
        </p>
        <h1 className="reveal delay-1">
          {profile.name}
          <span>{profile.role}</span>
        </h1>
        <p className="hero-text reveal delay-2">
          {profile.headline}
        </p>
        <div className="hero-actions reveal delay-3">
          <a className="btn primary" href="#projects">
            Lihat Project <span aria-hidden="true">→</span>
          </a>
          <a className="btn ghost" href="/cv-erdinus.pdf" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="socials reveal delay-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <span className="social-icon" aria-hidden="true">GH</span>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <span className="social-icon" aria-hidden="true">@</span>
          </a>
        </div>
      </div>
      <Hero3D />
    </section>
  )
}
