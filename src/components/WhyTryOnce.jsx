import { CheckCircle2, Zap, Heart, Clock, Shield, TrendingUp } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'We move quickly. No endless back-and-forth. Your project ships on time, every time.',
  },
  {
    icon: Heart,
    title: 'Built With Care',
    desc: 'We treat every client like our only client. Your brand gets our full attention.',
  },
  {
    icon: Clock,
    title: 'AI That Never Sleeps',
    desc: 'Our agents handle calls and bookings at 3 AM so you don\'t have to.',
  },
  {
    icon: Shield,
    title: 'Local & Trusted',
    desc: 'We are a Hyderabad-based team that understands Indian business culture and customer expectations.',
  },
  {
    icon: TrendingUp,
    title: 'Built to Grow',
    desc: 'Everything we build scales with you — from 10 customers to 10,000.',
  },
  {
    icon: CheckCircle2,
    title: 'One Try Is All It Takes',
    desc: 'That is our promise. Work with us once and you will see why clients keep coming back.',
  },
]

export default function WhyTryOnce() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="why" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Why{' '}
            <span className="gradient-text">Try Once?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Because one experience with Trione is enough to change how you see what's possible for your business.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const { ref: cardRef, visible: cardVisible } = useScrollReveal()
            const Icon = r.icon
            return (
              <div
                key={r.title}
                ref={cardRef}
                className={`flex gap-4 p-5 rounded-xl bg-navy-800/40 border border-white/6 hover:border-violet-500/30 hover:bg-navy-800/70 transition-all duration-400 group ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms`, transitionProperty: 'opacity, transform, background, border' }}
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/20 group-hover:from-violet-600/50 group-hover:to-cyan-500/40 transition-all duration-300">
                  <Icon size={18} className="text-violet-400 group-hover:text-violet-300 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{r.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Divider quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-white/80 max-w-2xl mx-auto leading-snug">
            "We don't ask for your trust upfront.{' '}
            <span className="gradient-text">We earn it in the first project.</span>"
          </blockquote>
          <p className="text-white/30 text-sm mt-4">— The Trione Team, Hyderabad</p>
        </div>
      </div>
    </section>
  )
}
