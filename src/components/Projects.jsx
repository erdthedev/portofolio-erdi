import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/profile.js'

export default function Projects() {
  return (
    <section id="projects" className="section-wrap projects-section">
      <div className="section-heading center">
        <p className="eyebrow">Projects</p>
        <h2>Project yang bisa ditunjukkan ke recruiter atau calon klien</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="project-orb" />
            <p>{project.category}</p>
            <h3>{project.title}</h3>
            <span>{project.description}</span>
            <div className="stack-list">
              {project.stack.map((tech) => (
                <small key={tech}>{tech}</small>
              ))}
            </div>
            <a href={project.link} target={project.link === '#' ? '_self' : '_blank'} rel="noreferrer">
              View project <ExternalLink size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
