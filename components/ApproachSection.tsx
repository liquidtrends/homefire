import SectionHeading from './SectionHeading'

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-white">
      <SectionHeading title="Our Approach" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        <div className="relative z-10 max-w-3xl mx-auto pr-6 border-r border-red-600/30">
            <p className="text-gray-900 text-base mb-6">
                We recognize that every Nation, business, and organization carries its own history, strengths, and aspirations.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
                Homefire meets you where you are – listening deeply, learning together, and co-creating solutions that are culturally grounded and future-oriented.
            </p>

            <p className="text-base font-bold text-gray-700 leading-relaxed">
                Our goal is simple: To support our clients to build strong foundations, ignite new possibilities, and walk forward with confidence and clarity.
            </p>
        </div>

        <img
          src="/approach.png"
          alt="Approach"
        />
      </div>
    </section>
  )
}
