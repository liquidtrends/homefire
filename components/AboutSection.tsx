import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden pb-10">
        <div className="bg-linear-to-t from-black to-gray-900 pt-6">
        <SectionHeading>
            <span className="text-white">
                About Us
            </span>
        </SectionHeading>
        </div>
        <img
            src="/flame1.png"
            alt=""
            aria-hidden
            className="
            absolute bottom-0 left-0
            w-[800px] md:w-[800px]
            opacity-25
            blur-xl
            pointer-events-none
            "
        />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
            <img
            src="/brandmark.png"
            alt="Brandmark"
            className="relative z-10"
            />

            <div className="relative z-10 max-w-3xl mx-auto pl-6 border-l border-red-600/30">
            <p className="text-xl md:text-1xl font-medium text-gray-900 mb-6">
                At Homefire Consulting, we believe that meaningful change begins with people, relationships, and culture.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
                We are an Indigenous woman-owned, family business, dedicated to creating spaces where communities, Nations, and organizations can thrive. Guided by a deep commitment to connection, respect, and shared learning, we aim to support you with the utmost care and intention.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
                We work alongside you to create meaningful experiences that lead to transformative outcomes – whether strengthening governance, supporting construction management and workforce development, or building pathways for reconciliation.
            </p>
            </div>

        </div>
        </section>
  )
}
