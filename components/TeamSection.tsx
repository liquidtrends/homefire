import SectionHeading from './SectionHeading'
import { FaLinkedin } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Candice Robertson-Shattler',
    role: 'Founder & President',
    image: '/candice.jpeg',
    linkedin: 'https://www.linkedin.com/in/candice-robertson-shattler-0a2b1188/'
  },
  {
    name: 'Kevin Shattler',
    role: 'Construction Management',
    image: '/kevin.jpeg',
    linkedin: 'https://www.linkedin.com/in/kevin-shattler-046a83a6/'
  },
  {
    name: 'Dr. J. Kenneth Robertson',
    role: 'Education & Leadership',
    image: '/kenneth.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-j-kenneth-robertson-05785831'
  }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <SectionHeading title="Who We Are" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-stone-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold text-gray-700 text-lg">{member.name}</p>
            <p className="text-gray-600 text-sm mb-3">{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-10 text-center">
        <p className="text-gray-700 text-base leading-relaxed">
          Candice and Kevin are proud of their Inuit lineage, with family roots tracing back to the Lower North Shore of Quebec (Saint Augustine & St. Paul’s River), and carry this connection with care and respect in both their personal and professional lives.
        </p>
      </div>
    </section>
  )
}
