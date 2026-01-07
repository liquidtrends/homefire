import SectionHeading from './SectionHeading'

export default function CommitmentSection() {
  return (
    <section id="commitment" className="relative py-24 bg-[#5f0201] text-white">
        <img
            src="/flame2.png"
            alt=""
            aria-hidden
            className="
            absolute bottom-0 right-0
            w-[550px] md:w-[550px]
            pointer-events-none
            "
        />
      <div className="absolute inset-0 bg-[url('/commitment.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6 text-left">

        <SectionHeading>
            <span className="text-white">
                Our Commitment
            </span>
        </SectionHeading>
        <p className="text-base font-bold mb-5">As an Indigenous-owned business, Homefire is dedicated to:</p>
        <ul className="space-y-6 text-base text-white/90">
        <li className="relative pl-6">
            <span className="absolute left-0 top-1 h-full w-[2px] bg-red-600/70" />
            Assisting Nations in serving their people through strong governance, strategic planning, and capacity-building
        </li>
        <li className="relative pl-6">
            <span className="absolute left-0 top-1 h-full w-[2px] bg-red-600/70" />
            Mentoring individuals along their desired paths, helping them grow their skills, confidence, and future opportunities
        </li>
        <li className="relative pl-6">
            <span className="absolute left-0 top-1 h-full w-[2px] bg-red-600/70" />
            Supporting organizations on their reconciliation journeys, offering guidance that is culturally informed, practical, and grounded in relationship
        </li>
        </ul>
      </div>
    </section>
  )
}
