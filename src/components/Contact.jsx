import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: This form is not yet wired to a backend or email service.
    // Connect it to something like Formspree, Netlify Forms, or a small
    // serverless function before relying on it to deliver messages.
    setStatus('submitted')
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <Reveal>
          <div className="contact__intro">
            <span className="eyebrow">Contact</span>
            <h2>Have a project, opportunity, or problem worth solving?</h2>
            <p>Let's connect. I'm currently open to full-stack developer roles and always glad to talk through interesting problems.</p>
            <div className="contact__channels">
              <a href="mailto:benjaminiyodusenga@gmail.com">benjaminiyodusenga@gmail.com</a>
              <a href="https://github.com/benduse" target="_blank" rel="noreferrer">github.com/benduse</a>
              {/* TODO: replace with your actual LinkedIn profile URL */}
              <a href="https://www.linkedin.com/in/benjaminniyodusenga/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
            </div>
            <button type="submit" className="btn btn-primary">
              {status === 'submitted' ? 'Message ready ✓' : 'Send Message'}
            </button>
            <p className="form-note">
              {status === 'submitted'
                ? 'This form isn\'t connected to an email service yet — for now, please reach out directly at the email above.'
                : 'This form needs to be connected to an email service (e.g. Formspree or Netlify Forms) before it can deliver messages.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
