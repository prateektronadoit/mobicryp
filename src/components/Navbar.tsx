import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mode, setMode] = useState<'top' | 'up' | 'down'>('top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isCreamyPage = location.pathname === '/learning' || location.pathname === '/contact'

  useEffect(() => {
    if (isCreamyPage) return // Don't update mode on creamy pages
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < window.innerHeight - 10) {
        setMode('top') // In hero section
      } else if (currentScrollY > lastScrollY.current) {
        setMode('down') // Scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        setMode('up') // Scrolling up
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCreamyPage])

  let navClass = ''
  if (isHomePage) {
    if (mode === 'top') {
      navClass = 'bg-transparent text-white static'
    } else if (mode === 'up') {
      navClass = 'bg-[#f7f7f5] bg-opacity-95 shadow text-black fixed top-0 left-0 w-full translate-y-0 transition-all duration-500 z-50'
    } else if (mode === 'down') {
      navClass = 'fixed top-0 left-0 w-full -translate-y-20 opacity-0 pointer-events-none transition-all duration-500 z-50'
    }
  } else if (isCreamyPage) {
    navClass = 'bg-[#f7f7f5] shadow text-black fixed top-0 left-0 w-full z-50'
  } else {
    navClass = 'bg-[#f7f7f5] bg-opacity-95 shadow text-black fixed top-0 left-0 w-full z-50'
  }

  const linkClass = (active: boolean) =>
    `font-medium px-3 py-2 rounded-md text-sm ${active ? 'text-black' : ''}`

  return (
    <nav className={navClass} style={{ transitionProperty: 'background, color, transform, opacity' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and nav links */}
          <div className="flex items-center space-x-8">
            <img className="h-8 w-auto" src="/mobicryp1.png" alt="Logo" />
            <div className="hidden md:flex space-x-6">
              <Link to="/" className={isHomePage && mode === 'top' && !isCreamyPage ? 'font-medium px-3 py-2 rounded-md text-sm text-white drop-shadow' : linkClass(isCreamyPage || !isHomePage)}>
                Home
              </Link>
              <Link to="/learning" className={isCreamyPage && location.pathname === '/learning' ? linkClass(true) : (isHomePage && mode === 'top' ? 'font-medium px-3 py-2 rounded-md text-sm text-white drop-shadow' : linkClass(false))}>
                Learnings
              </Link>
              <Link to="/contact" className={isCreamyPage && location.pathname === '/contact' ? linkClass(true) : (isHomePage && mode === 'top' ? 'font-medium px-3 py-2 rounded-md text-sm text-white drop-shadow' : linkClass(false))}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side: Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className={isHomePage && mode === 'top' && !isCreamyPage ? 'font-medium px-4 py-2 text-white drop-shadow' : 'font-medium px-4 py-2 text-black'}>Log in</a>
            <a href="#" className={`font-medium px-8 py-2 rounded-full transition-colors duration-200 ${isHomePage && mode === 'top' && !isCreamyPage ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>Sign up</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isHomePage && mode === 'top' && !isCreamyPage ? 'text-white' : 'text-black'} hover:text-black focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden px-2 pt-2 pb-3 space-y-1 ${isHomePage && mode === 'top' && !isCreamyPage ? 'bg-black bg-opacity-80 text-white' : 'bg-[#f7f7f5] text-black'}`}>
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/learning" className="block px-3 py-2 rounded-md text-base font-medium">Learnings</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          <div className="flex flex-col mt-4 space-y-2">
            <a href="#" className="font-medium px-4 py-2 text-center">Log in</a>
            <a href="#" className={`font-medium px-8 py-2 rounded-full text-center ${isHomePage && mode === 'top' && !isCreamyPage ? 'bg-white text-black' : 'bg-black text-white'}`}>Sign up</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 