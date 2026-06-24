import { motion } from 'framer-motion'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="section-wrap skills-section">
      <div className="section-heading center">
        <p className="eyebrow">Skills</p>
        <h2>Kombinasi finance, admin, dan teknologi</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-pill"
            key={skill}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.035 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
