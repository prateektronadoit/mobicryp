const focusItems = [
  {
    name: 'Crypto Minting',
    color: 'bg-black-700',
    image: '/mining.png',
  },
  {
    name: 'Arbitrage',
    color: 'bg-black-700',
    image: '/arbitrage.png',
  },
  {
    name: 'Global Infrastructure',
    color: 'bg-black-700',
    image: '/Global.png',
  },
]

const OurFocusSection = () => {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Multiple animated gradients */}
        <div className="absolute inset-0 w-full h-full animate-focusbg1" style={{
          background: 'radial-gradient(circle at 20% 30%, #2563eb33 0%, transparent 60%), radial-gradient(circle at 80% 70%, #facc1533 0%, transparent 60%)',
          opacity: 0.7,
        }} />
        <div className="absolute inset-0 w-full h-full animate-focusbg2" style={{
          background: 'radial-gradient(circle at 60% 20%, #00ffd033 0%, transparent 60%)',
          opacity: 0.4,
        }} />
        {/* Floating white orbs with black shadow */}
        <div className="absolute left-[15%] top-[30%] w-40 h-40 rounded-full bg-white opacity-20 blur-2xl shadow-2xl shadow-black animate-float1" />
        <div className="absolute left-[70%] top-[60%] w-32 h-32 rounded-full bg-white opacity-10 blur-2xl shadow-2xl shadow-black animate-float2" />
        <div className="absolute left-[50%] top-[10%] w-24 h-24 rounded-full bg-white opacity-15 blur-2xl shadow-xl shadow-black animate-float3" />
        <div className="absolute left-[80%] top-[20%] w-28 h-28 rounded-full bg-white opacity-12 blur-2xl shadow-2xl shadow-black animate-float4" />
        {/* Floating glow */}
        <div className="absolute left-1/2 top-1/2 w-[400px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-30 blur-3xl animate-glowfloat" />
      </div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Our <span className="text-white-400 px-2 rounded">Focus</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {focusItems.map((item) => (
            <div key={item.name} className="bg-white/5 rounded-2xl shadow-xl flex flex-col items-center w-72 h-96 overflow-hidden">
              {/* Image area */}
              <div className="w-full" style={{height: '70%'}}>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              {/* Bottom bar */}
              <div className={`w-full flex items-center justify-center py-4 text-center text-xl font-bold text-white ${item.color}`} style={{height: '30%'}}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes focusbg1 {
          0% { background-position: 0% 0%, 100% 100%; }
          100% { background-position: 100% 100%, 0% 0%; }
        }
        @keyframes focusbg2 {
          0% { background-position: 60% 20%; opacity: 0.4; }
          50% { background-position: 40% 80%; opacity: 0.7; }
          100% { background-position: 60% 20%; opacity: 0.4; }
        }
        @keyframes glowfloat {
          0% { transform: translate(-50%, -60%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -40%) scale(1.1); opacity: 0.5; }
          100% { transform: translate(-50%, -60%) scale(1); opacity: 0.3; }
        }
        .animate-focusbg1 > div {
          animation: focusbg1 10s ease-in-out infinite alternate;
        }
        .animate-focusbg2 {
          animation: focusbg2 12s ease-in-out infinite alternate;
        }
        .animate-glowfloat {
          animation: glowfloat 8s ease-in-out infinite alternate;
        }
        @keyframes float1 {
          0% { transform: translateY(0) scale(1); opacity: 0.18; }
          50% { transform: translateY(-30px) scale(1.08); opacity: 0.25; }
          100% { transform: translateY(0) scale(1); opacity: 0.18; }
        }
        @keyframes float2 {
          0% { transform: translateY(0) scale(1); opacity: 0.10; }
          50% { transform: translateY(25px) scale(1.12); opacity: 0.18; }
          100% { transform: translateY(0) scale(1); opacity: 0.10; }
        }
        @keyframes float3 {
          0% { transform: translateY(0) scale(1); opacity: 0.13; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 0.20; }
          100% { transform: translateY(0) scale(1); opacity: 0.13; }
        }
        @keyframes float4 {
          0% { transform: translateY(0) scale(1); opacity: 0.12; }
          50% { transform: translateY(18px) scale(1.09); opacity: 0.18; }
          100% { transform: translateY(0) scale(1); opacity: 0.12; }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite alternate; }
        .animate-float2 { animation: float2 9s ease-in-out infinite alternate; }
        .animate-float3 { animation: float3 8s ease-in-out infinite alternate; }
        .animate-float4 { animation: float4 10s ease-in-out infinite alternate; }
      `}</style>
    </section>
  )
}

export default OurFocusSection 