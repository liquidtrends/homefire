import SectionHeading from './SectionHeading'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-black text-white text-center px-6 overflow-hidden">
      {/* Flame background image */}
      <img
        src="/flame1.png"
        alt=""
        aria-hidden="true"
        className="
          absolute bottom-0 right-0
          w-[800px] md:w-[800px]
          opacity-20
          blur-2xl
          pointer-events-none
          z-0
        "
      />

      <div className="relative z-10">
        <SectionHeading>
          <span className="text-white">
            Contact Us
          </span>
        </SectionHeading>

        <p className="mb-2">
          For more information as to how Homefire can serve you, please contact:
        </p>
        <p className="mb-6 text-sm">
          Candice Robertson-Shattler, Founder and President
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
            <a
                href="mailto:candice@homefireconsultingltd.com"
                className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center gap-3"
            >
                <MdEmail size={20} />
                <span>candice@homefireconsultingltd.com</span>
            </a>
            <a
                href="tel:+17807175277"
                className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center gap-3"
            >
                <FaPhone size={20} />
                <span>(780) 717-5277</span>
            </a>
        </div>

        <div className="pt-10 text-gray-400 text-xs max-w-5xl mx-auto">
          <p className="mb-5">Homefire is certified with the Canadian Council for Indigenous Business.</p>
          <p>
            Homefire Consulting is based in Amiskwacîwâskahikan (Edmonton, Alberta). We respectfully acknowledge Treaty 6 Territory as home to many Indigenous Nations including the Cree, Dene, Nakota Sioux, Blackfoot, Saulteaux and Otipemisiwak Métis people.
          </p>
        </div>
      </div>
    </section>
  )
}
