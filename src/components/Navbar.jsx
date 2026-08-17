import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects', primary: true },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar_inner">
        <a href="#home" className="navbar_logo">
          Benjamin <span>Niyodusenga</span>
        </a>
        <button
          className="navbar_menu_toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span style={open ? { transform: 'translateY(7px) rotate(45deg)' } : undefined} />
          <span style={open ? { opacity: 0 } : undefined} />
          <span style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : undefined} />
        </button>
        <nav className={`navbar_links ${open ? 'is_open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={l.primary ? 'is_primary_nav_link' : ''} onClick={handleClick}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
