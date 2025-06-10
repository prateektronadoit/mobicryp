import { useState, useRef, useEffect } from 'react'
import React from 'react'

const features = [
  {
    title: 'Transparent, real-time transactions',
    image: '/features/1.png',
    description: 'Mobicryp powerful network allows transactions to be completed nearly instantaneously and at a fraction of the cost.'
  },
  {
    title: 'A secure global network',
    image: '/features/2.png',
    description: 'Mobicryp allows transactions to be tracked in the public ledger for security and transparency.'
  },
  {
    title: 'Stability through scalability',
    image: '/features/3.png',
    description: 'Mobicryp powered by TRONADO, has a very active and vast user base which helps in scaling things to a higher level.'
  },
  {
    title: 'A scalable way to transact',
    image: '/features/4.png',
    description: 'Mobicryp network allows every individual to have a safe and passive income for the longer run.'
  },
  {
    title: 'An energy management innovation',
    image: '/features/5.png',
    description: 'Mobicryp works on daily arbitrage, which helps it in bringing in the flow essential for scaling the market in an innovative manner.'
  },
  {
    title: 'A foundation of interoperability',
    image: '/features/6.png',
    description: 'Mobicryp works on the essential technology which helps the user for making the use of crypto easy and meaningful.'
  },
]

const Features = () => {
  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1 // mobile
      if (window.innerWidth < 1024) return 3 // tablet
    }
    return 5 // desktop: show 5 cards
  }

  const [startIdx, setStartIdx] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Update itemsPerView on resize
  React.useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Looping carousel logic for visible features
  const visibleFeatures = []
  for (let i = 0; i < itemsPerView; i++) {
    visibleFeatures.push(features[(startIdx + i) % features.length])
  }

  const goLeft = () => {
    setStartIdx((idx) => (idx - itemsPerView + features.length) % features.length)
  }
  const goRight = () => {
    setStartIdx((idx) => (idx + itemsPerView) % features.length)
  }

  // For dots
  const numDots = Math.ceil(features.length / itemsPerView)
  const activeDot = Math.floor(startIdx / itemsPerView)

  // Smooth transition for carousel
  const trackRef = useRef<HTMLDivElement>(null)

  const handleDotClick = (idx: number) => {
    setStartIdx((idx * itemsPerView) % features.length)
  }

  return (
    <div
      ref={sectionRef}
      className={`py-12 bg-black transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center">
          {/* Arrow buttons */}
          {itemsPerView === 2 && (
            <div className="flex w-full justify-between items-center fixed left-0 top-1/2 z-20 px-2 sm:static sm:justify-center sm:gap-8 pointer-events-none" style={{transform: 'translateY(-50%)'}}>
              <button
                onClick={goLeft}
                className={`pointer-events-auto bg-black bg-opacity-60 rounded-full p-3 shadow-lg border border-white/20 hover:bg-opacity-80 transition`}
                aria-label="Previous"
                style={{minWidth: 48, minHeight: 48}}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div className="flex-1" />
              <button
                onClick={goRight}
                className={`pointer-events-auto bg-black bg-opacity-60 rounded-full p-3 shadow-lg border border-white/20 hover:bg-opacity-80 transition`}
                aria-label="Next"
                style={{minWidth: 48, minHeight: 48}}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
          {/* Feature cards with smooth sliding */}
          <div className="overflow-hidden w-full mt-16 sm:mt-0">
            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-6 transition-transform duration-700"
              style={{
                width: `${features.length * (100 / itemsPerView)}%`,
                transform: `translateX(-${(startIdx * (100 / features.length))}%)`,
              }}
            >
              {features.map((feature, i) => (
                <div
                  key={feature.title + i}
                  className="w-full max-w-xs bg-[#18181b] rounded-3xl p-8 flex flex-col items-start justify-start h-[420px] aspect-[3/4] mx-auto transition-all duration-300"
                  style={{ maxWidth: '95vw', minWidth: '220px', flex: `0 0 ${100 / features.length}%` }}
                >
                  <div className="text-white text-lg font-medium mb-6 leading-snug w-full" style={{minHeight: '60px'}}>
                    {feature.title}
                  </div>
                  <div className="flex-1 w-full flex items-center justify-center mb-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-contain w-32 h-32 sm:w-36 sm:h-36"
                      style={{ filter: 'drop-shadow(0 0 16px #fff8) saturate(1.5)' }}
                    />
                  </div>
                  <div className="text-white text-base leading-snug w-full font-normal mt-auto">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: numDots }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full inline-block transition-all duration-300 cursor-pointer ${idx === activeDot ? 'bg-blue-500' : 'bg-gray-600'}`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features 