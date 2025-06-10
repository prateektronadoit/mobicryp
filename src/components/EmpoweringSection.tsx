import { useEffect, useRef, useState } from 'react'

const EmpoweringSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-12 flex items-center justify-center bg-black relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20 transition-all duration-700"
        style={{
          opacity: isHovered ? 1 : 0.5,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          filter: isHovered ? 'blur(0px)' : 'blur(8px)'
        }}
      />
      
      <div 
        className="relative z-10 text-center px-4 max-w-2xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        <h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            textShadow: isHovered ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
          }}
        >
          Empowering Crypto
        </h1>
        
        <p 
          className="text-lg md:text-xl text-gray-300 mb-6 transition-all duration-500"
          style={{
            transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
            opacity: isHovered ? 1 : 0.8
          }}
        >
          Mint Smarter. Mint Faster.
        </p>

        <a
          href="/Mobicryp.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-base font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
        >
          Download Business Plan
        </a>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          opacity: isHovered ? 0.8 : 0.3,
          transition: 'opacity 0.5s ease'
        }}
      />
    </section>
  )
}

export default EmpoweringSection 