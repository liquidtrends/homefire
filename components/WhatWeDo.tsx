import SectionHeading from './SectionHeading'

const services = [
  {
    title: 'Governance & Organizational Strengthening',
    bullets: [
      'Governance training that builds leadership capacity, clarity, accountability, and community alignment',
      'Strategic and operational planning rooted in vision, practicality, and long-term sustainability',
      'Construction management that supports the planning and delivery of complex projects in ways that uphold community priorities, ensure accountability, and promote effective use of time, funding, and resources.',
      'Project management and reporting to help teams move initiatives forward with structure, consistency, and clear communication',
      'Educational and organizational policy analysis and writing, ensuring policies reflect community values, legal requirements, and best practices'
    ]
  },
  {
    title: 'Economic Development & Capacity Building',
    bullets: [
      'Indigenous contracting and procurement guidance that supports ethical, community-driven, and culturally aligned decision-making',
      'Indigenous workforce development to create pathways for learning, skills growth, and employment',
      'Mentoring, coaching, and team building to strengthen confidence, communication, and collaboration within teams and organizations'
    ]
  },
  {
    title: 'Community Engagement & Partnership Building',
    bullets: [
      'Community engagement designed to listen deeply, foster trust, and gather meaningful input that guides decisions and strengthens relationships',
      'Partnership development to build strong, respectful, and mutually beneficial collaborations across sectors'
    ]
  },
  {
    title: 'Education, Training & Custom Solutions',
    bullets: [
      'Curriculum and educational programming development tailored to the unique needs and goals of clients and communities',
      'Custom facilitation, training, and workshops grounded in culture, relational practices, and the context of each client',
      'Grant writing to support access to funding opportunities that advance community and organizational priorities'
    ]
  }
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-20 bg-gradient-to-tr from-gray-800 to-stone-900 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="relative z-10">
        <SectionHeading>
          <span className="text-white">What We Do</span>
        </SectionHeading>

        <div className="max-w-7xl mx-auto px-6 columns-1 md:columns-2 gap-6 space-y-6">
        {services.map((service, index) => (
            <div
            key={index}
            className="break-inside-avoid bg-gradient-to-tr from-[#BE1E2D] to-[#ED1C324] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-stone-700 mb-6"
            >
            <h3 className="font-semibold text-2xl mb-4 text-white">
                {service.title}
            </h3>
            <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
                {service.bullets.map((bullet, i) => (
                <li className="text-base pl-3" key={i}>{bullet}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>
      </div>
    </section>
  )
}
