const AppPromoSection = () => {
  return (
    <section className="w-full py-12 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8">
        {/* Left: Text and buttons */}
        <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white-900 mb-4 leading-tight">
            Earn Daily With Your Mobile Phone
          </h2>
          <p className="text-lg text-white-700 mb-8">Download mobicryp app from ↓</p>
          <div className="flex flex-col gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.mobicryp.android" target="_blank" rel="noopener noreferrer" className="w-48">
              <img src="/Google-Play-App-Store.png" alt="Get it on Google Play" className="w-full h-100px" />
            </a>
          </div>
        </div>
        {/* Right: Phone image */}
        <div className="flex-1 flex items-center justify-center min-h-[320px] relative">
          {/* Animated floating circle and shadow */}
          <div className="absolute left-1/2 top-2/3 -translate-x-1/2 w-60 h-16 z-0 pointer-events-none">
            <div className="w-full h-full rounded-full bg-gradient-to-t from-blue-400/30 via-white/10 to-transparent blur-2xl animate-ripple" />
            <div className="w-full h-full rounded-full bg-black/60 blur-xl opacity-60 animate-shadowdrop" />
          </div>
          <img src="/phone.png" alt="Mobicryp App" className="w-96 h-auto animate-float z-10 relative" />
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(32px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes ripple {
          0% { transform: scaleX(1) scaleY(1); opacity: 0.7; }
          50% { transform: scaleX(1.15) scaleY(1.25); opacity: 0.35; }
          100% { transform: scaleX(1) scaleY(1); opacity: 0.7; }
        }
        .animate-ripple {
          animation: ripple 3.5s ease-in-out infinite;
        }
        @keyframes shadowdrop {
          0% { filter: blur(24px); opacity: 0.6; }
          50% { filter: blur(36px); opacity: 0.85; }
          100% { filter: blur(24px); opacity: 0.6; }
        }
        .animate-shadowdrop {
          animation: shadowdrop 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default AppPromoSection;
