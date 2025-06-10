// import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
      {/* Remove the Navbar from here */}
      {/* <div className="relative z-20">
        <Navbar />
      </div> */}
      {/* Hero Content */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="mb-4 text-gray-300 text-2xl font-semibold">Mobicryp</div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          THE FUTURE IS HERE
        </h1>
        {/* <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-2xl">
          Advanced trading. 0% maker fees. 0.09% taker fees. Full stack security.
        </p>
        <a href="#" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-200 transition">
          Explore the exchange
        </a> */}
      </div>
    </div>
  )
}

export default Hero 