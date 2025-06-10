const AboutUsSection = () => {
  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8">
        {/* Left: Image, Text and social icons */}
        <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            About <span className="text-white-400">Us</span>
          </h2>
          <p className="text-gray-200 text-lg mb-6 max-w-xl">
            We're a team of innovators, investors, marketers, entrepreneurs, and achievers. Mobicryp is a cryptocurrency minting investment conglomerate by a passionate team. We have built the best minting platform to provide maximum benefits to our customers in collaboration with Hong Kong's best USDT minting Company.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#162447] flex items-center justify-center text-white hover:bg-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#162447] flex items-center justify-center text-white hover:bg-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.25 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#162447] flex items-center justify-center text-white hover:bg-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        {/* Right: Photo/illustration placeholder */}
        <div className="flex-1 flex items-center justify-center min-h-[320px]">
          <div className="relative flex items-center justify-center w-72 h-72">
            {/* Rotating glowing circle */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-500/40 via-white/10 to-blue-400/60 blur-2xl z-0 animate-rotate-glow" />
            <div className="w-64 h-64 rounded-full border-4 border-blue-400 shadow-2xl bg-black flex items-center justify-center z-10">
              <img src="/about.png" alt="About Mobicryp" className="w-56 h-56 object-contain rounded-full animate-float-updown" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate-glow {
          animation: rotateGlow 6s linear infinite;
        }
        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
          100% { transform: translateY(0); }
        }
        .animate-float-updown {
          animation: floatUpDown 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutUsSection 