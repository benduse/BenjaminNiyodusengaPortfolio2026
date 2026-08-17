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
          <div className="contact_intro">
            <span className="eyebrow">Contact</span>
            <h2>Have a project, opportunity, or problem worth solving?</h2>
            <p>Let's connect. I'm currently open to full-stack developer roles and always glad to talk through interesting problems.</p>
            <div className="contact_channels">
              <a href="mailto:benjaminiyodusenga@gmail.com">benjaminiyodusenga@gmail.com</a>
              <a href="https://github.com/benduse" target="_blank" rel="noreferrer">github.com/benduse</a>
              <a href="https://www.linkedin.com/in/benjaminniyodusenga/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact_form surface_card" onSubmit={handleSubmit}>
            <div className="contact_form_row">
              <div className="contact_form_field">
                <label htmlFor="contact_name_input">Name</label>
                <input id="contact_name_input" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="contact_form_field">
                <label htmlFor="contact_email_input">Email</label>
                <input id="contact_email_input" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="contact_form_field">
              <label htmlFor="contact_subject_input">Subject</label>
              <input id="contact_subject_input" name="subject" type="text" required />
            </div>
            <div className="contact_form_field">
              <label htmlFor="contact_message_textarea">Message</label>
              <textarea id="contact_message_textarea" name="message" rows="5" required />
            </div>
            <button type="submit" className="btn btn_primary">
              {status === 'submitted' ? 'Message ready ✓' : 'Send Message'}
            </button>
            <p className="contact_form_note">
              {status === 'submitted'
                ? 'Thank you for contacting Benjamin.'
                : 'Benjamin will be in touch as soon as administratively possible.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
