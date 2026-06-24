import { motion } from 'framer-motion'
import { experiences } from '../data/profile.js'

export default function Experience() {
  return (
    <section className="section-wrap experience-section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Pengalaman & aktivitas</h2>
      </div>
      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={`${item.title}-${item.company}`}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div>
              <small>{item.period}</small>
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
