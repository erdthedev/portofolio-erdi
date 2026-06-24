import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="#home" className="brand" aria-label="Go to home">
        <span className="brand-mark">E</span>
        <span>Erdinus</span>
      </a>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
    </header>
  )
}
