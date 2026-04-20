import { MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/6 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div className="flex items-center gap-2">
          <span className="text-white/70 font-semibold gradient-text text-base">Trione Marketing.co</span>
          <span className="text-white/20">|</span>
          <span>Try Once</span>
        </div>

        <div className="flex items-center gap-1.5">
          <MapPin size={12} className="text-violet-400" />
          Hyderabad &amp; Visakhapatnam, India
        </div>

        <div className="flex items-center gap-1">
          © {year} Trione Marketing.co. Made with Idea and <Heart size={12} className="text-pink-400" />
          in Vizag &amp; Hyderabad.
        </div>
      </div>
    </footer>
  )
}
