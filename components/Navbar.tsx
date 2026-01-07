'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Commitment', href: '#commitment' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Who We Are', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const yOffset = -120 // adjust for navbar height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const top = section.getBoundingClientRect().top
          if (top <= 150 && top + section.clientHeight > 150) {
            setActive(item.href.slice(1))
          }
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'bg-black/90' : 'bg-black/0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        <a href="/" aria-label="Home">
          <img
            src="/homefire-logo.png"
            alt="Homefire Logo"
            className="w-[350px] object-contain"
          />
        </a>

        <div className="hidden md:flex gap-8 lowercase">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative flame-hover transition-colors duration-200 cursor-pointer ${
                active === item.href.slice(1) ? 'text-red-500' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden text-3xl px-1 py-3 rounded-md text-red-500"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-6 space-y-4 backdrop-blur-sm lowercase grid grid-flow-row auto-rows-max divide-y-1 divide-red-800">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="w-full text-left cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
