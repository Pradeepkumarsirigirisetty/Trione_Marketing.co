import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-800/10 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={14} />
          Based in Hyderabad, India
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-up">
          Try{' '}
          <span className="gradient-text">Once.</span>
          <br />
          <span className="text-white/90">You'll Never Look Back.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-100">
          Websites that convert, cinematic videos that captivate, and AI agents that never miss a customer —
          all from one team that gets it right the first time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 btn-glow"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
          >
            Explore Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up animate-delay-300">
          {[
            { value: '3', label: 'Core Services' },
            { value: '100%', label: 'Client Focus' },
            { value: '1×', label: 'Try. That\'s all.' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  )
}
