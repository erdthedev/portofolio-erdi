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
          <div className="skill-pill reveal" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
