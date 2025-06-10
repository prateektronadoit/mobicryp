import { useEffect, useRef, useState } from 'react'

const EmpoweringSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrolledPast(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-black">
      {/* Bold diagonal strip with photocromatic glassy animated overlay, moving up and down and bending */}
      <div className="absolute left-1/2 top-1/2 w-[140vw] h-20 z-0 animate-stripupdownbend" style={{ willChange: 'transform' }}>
        {/* Main strip */}
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-red-600 rounded-lg shadow-2xl border-t-4 border-b-4 border-white" />
          <div className="absolute inset-x-0 top-0 h-2 bg-white" />
          <div className="absolute inset-x-0 bottom-0 h-2 bg-blue-600" />
          {/* Photocromatic glassy animated overlay */}
          <div className="absolute inset-0 pointer-events-none animate-glassstripes"
            style={{
              background: `
                repeating-linear-gradient(120deg, rgba(37,99,235,0.10) 0 2px, transparent 2px 40px),
                repeating-linear-gradient(120deg, rgba(255,255,255,0.08) 0 8px, transparent 8px 48px),
                linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(37,99,235,0.10) 100%),
                linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(37,99,235,0.10) 100%)
              `,
              filter: 'blur(2px) brightness(1.2)',
              opacity: 0.85,
              borderRadius: '12px',
            }}
          />
          {/* Soft glow overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(37,99,235,0.18) 0%, transparent 70%)',
            opacity: 0.7,
            filter: 'blur(8px)',
            borderRadius: '12px',
          }} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        {!scrolledPast ? (
          <>
            <h1 className="block text-2xl font-semibold uppercase tracking-wide text-white-500 mb-2">EMPOWERING</h1>
            <h2 className="block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-white mb-2">CRYPTO</h2>
            <h3 className="block text-3xl font-bold text-white-500 mb-6">MINTING</h3>
          </>
        ) : (
          <h2 className="block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-white mb-6 transition-all duration-500">Mint Smarter. Mint Faster.</h2>
        )}
        <a href="/Mobicryp.pdf" download className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition">Download Business Plan</a>
      </div>
      <style>{`
        @keyframes glassstripes {
          0% { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%; }
          100% { background-position: 0% 40px, 0% 48px, 0% 100px, 0% 80px; }
        }
        .animate-glassstripes {
          animation: glassstripes 8s ease-in-out infinite alternate;
        }
        @keyframes stripupdownbend {
          0% {
            transform: translate(-50%, -60%) rotate(-16deg) skewY(-4deg);
          }
          50% {
            transform: translate(-50%, -50%) rotate(-12deg) skewY(0deg);
          }
          100% {
            transform: translate(-50%, -40%) rotate(-8deg) skewY(4deg);
          }
        }
        .animate-stripupdownbend {
          animation: stripupdownbend 6s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  )
}

export default EmpoweringSection 