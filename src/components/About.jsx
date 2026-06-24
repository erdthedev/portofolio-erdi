import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section-wrap about grid-section">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="eyebrow">About</p>
        <h2>Profil singkat</h2>
      </motion.div>
      <motion.div className="glass-card about-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>{profile.summary}</p>
        <div className="stats-grid">
          {profile.stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
