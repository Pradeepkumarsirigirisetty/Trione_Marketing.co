import { Globe, Video, Bot } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    tagline: 'Your digital storefront, built right.',
    description:
      'We craft fast, modern, mobile-first websites for restaurants, local shops, and startups. Clean design, clear messaging, and built to convert visitors into customers.',
    features: ['Landing Pages', 'Business Websites', 'Portfolio Sites', 'E-commerce Ready'],
    color: 'from-violet-600 to-violet-400',
    glow: 'group-hover:shadow-violet-500/25',
    border: 'group-hover:border-violet-500/50',
    badge: 'bg-violet-600/15 text-violet-300 border-violet-500/20',
  },
  {
    icon: Video,
    title: 'Cinematic Video Production',
    tagline: 'Stories told through a lens.',
    description:
      'Our videographer creates stunning cinematic ad films for restaurants, local brands, and creators. High-quality visuals that make your audience stop scrolling and start watching.',
    features: ['Restaurant Ad Films', 'Brand Stories', 'Product Showcases', 'Reels & Short Films'],
    color: 'from-cyan-500 to-cyan-300',
    glow: 'group-hover:shadow-cyan-500/25',
    border: 'group-hover:border-cyan-500/50',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  },
  {
    icon: Bot,
    title: 'AI Business Agents',
    tagline: 'Your smartest employee, available 24/7.',
    description:
      'We build AI agents that work like a front-desk receptionist — answering calls, booking appointments, taking food orders, and handling customer queries automatically.',
    features: ['Call Handling', 'Appointment Booking', 'Food Order Intake', 'Custom Workflows'],
    color: 'from-pink-500 to-violet-400',
    glow: 'group-hover:shadow-pink-500/25',
    border: 'group-hover:border-pink-500/50',
    badge: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  },
]

function ServiceCard({ service, index }) {
  const { ref, visible } = useScrollReveal()
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`group relative bg-navy-800/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-500 card-glow ${service.border} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-5`}>
        <Icon size={24} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
      <p className="text-sm text-white/40 italic mb-4">{service.tagline}</p>

      {/* Description */}
      <p className="text-white/65 text-sm leading-relaxed mb-6">{service.description}</p>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((f) => (
          <span
            key={f}
            className={`text-xs px-3 py-1 rounded-full border ${service.badge}`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Hover gradient border effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(6,182,212,0.05))' }}
      />
    </div>
  )
}

export default function Services() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Three Services.{' '}
            <span className="gradient-text">One Team.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything a modern local business needs to get noticed, convert customers, and run smarter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
