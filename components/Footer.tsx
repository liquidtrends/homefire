export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 text-center py-6 text-sm">
      <p>
        © {new Date().getFullYear()} Homefire Consulting Ltd. | Design by{' '}
        <a
          href="https://denehoni.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-600 font-medium transition-colors"
        >
          Dene Honi
        </a>
      </p>
    </footer>
  )
}
