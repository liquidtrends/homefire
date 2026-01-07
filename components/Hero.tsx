import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="relative h-[650px] md:h-screen overflow-hidden">
      <Navbar />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-stone-900" />

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/hero-background.png"
          alt="Hero Background"
          className="w-full object-contain md:object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="text-white max-w-4xl p-4 md:p-6 rounded">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-snug md:leading-relaxed">
            Walking{' '}
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent animate-gradient-x mx-2">
                Together
            </span>{' '}
            Toward{' '}
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent animate-gradient-x mx-2">
                Stronger
            </span>{' '}
            Communities
          </h1>
        </div>
      </div>
    </section>
  )
}
