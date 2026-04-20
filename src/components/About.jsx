import { Code2, Camera, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const team = [
  {
    initials: 'PK',
    name: 'Pradeep Kumar',
    role: 'Co-founder · Web Developer & AI Engineer',
    icon: Code2,
    bio: 'Builds fast, modern websites and custom AI agents that automate customer interactions for restaurants, shops, and startups. Based in Hyderabad, originally from Visakhapatnam.',
    color: 'from-violet-600 to-violet-400',
    badgeColor: 'bg-violet-600/15 text-violet-300',
    location: 'Hyderabad · from Vizag',
  },
  {
    initials: 'VK',
    name: 'Vinay Kumar',
    role: 'Co-founder · Cinematographer & Video Director',
    icon: Camera,
    bio: 'Crafts stunning cinematic ad films and brand videos for restaurants and local brands. Turns everyday businesses into stories worth watching. Based in Visakhapatnam.',
    color: 'from-cyan-500 to-cyan-300',
    badgeColor: 'bg-cyan-500/15 text-cyan-300',
    location: 'Visakhapatnam (Vizag)',
  },
]

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Who We Are</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            A Small Team.{' '}
            <span className="gradient-text">Big Results.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Trione Marketing.co is a two-person powerhouse from Hyderabad &amp; Visakhapatnam — blending technology and creativity to help local businesses grow.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((member, i) => {
            const { ref: cardRef, visible: cardVisible } = useScrollReveal()
            const Icon = member.icon
            return (
              <div
                key={member.role}
                ref={cardRef}
                className={`bg-navy-800/60 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-all duration-500 card-glow ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5`}>
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>

                {/* Name + role */}
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4 ${member.badgeColor}`}>
                  <Icon size={12} />
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-white/55 text-sm leading-relaxed mb-3">{member.bio}</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-white/30">
                  <MapPin size={11} className="text-violet-400" />
                  {member.location}
                </div>
              </div>
            )
          })}
        </div>

        {/* Location badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy-800/60 border border-white/8 text-white/50 text-sm">
            <MapPin size={14} className="text-violet-400" />
            Hyderabad &amp; Visakhapatnam, Andhra Pradesh · India
          </div>
        </div>
      </div>
    </section>
  )
}
