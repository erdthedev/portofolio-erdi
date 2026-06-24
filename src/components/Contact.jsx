import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Siap diskusi project atau peluang kerja?</h2>
        <p>
          Hubungi saya untuk pekerjaan administrasi, accounting support, website sederhana, atau sistem kerja internal berbasis web.
        </p>
        <div className="contact-actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <span aria-hidden="true">@</span> Email
          </a>
          <a className="btn ghost" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
            <span aria-hidden="true">WA</span> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
