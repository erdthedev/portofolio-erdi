import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section-wrap about grid-section">
      <div className="section-heading reveal">
        <p className="eyebrow">About</p>
        <h2>Profil singkat</h2>
      </div>
      <div className="glass-card about-card reveal delay-1">
        <p>{profile.summary}</p>
        <div className="stats-grid">
          {profile.stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
