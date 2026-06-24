import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Mail } from 'lucide-react'
import Hero3D from './Hero3D.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-content">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {profile.location}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
          {profile.name}
          <span>{profile.role}</span>
        </motion.h1>
        <motion.p className="hero-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.16 }}>
          {profile.headline}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.24 }}>
          <a className="btn primary" href="#projects">
            Lihat Project <ArrowRight size={18} />
          </a>
          <a className="btn ghost" href="/cv-erdinus.pdf" download>
            Download CV <Download size={18} />
          </a>
        </motion.div>
        <motion.div className="socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.35 }}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Github">
            <Github size={19} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={19} />
          </a>
        </motion.div>
      </div>
      <Hero3D />
    </section>
  )
}
