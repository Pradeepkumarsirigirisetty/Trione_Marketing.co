import { useState } from 'react'
import { Send, MessageCircle, Mail, CheckCircle2, Instagram } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, visible } = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hi Trione! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/917893789097?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Ready to{' '}
            <span className="gradient-text">Try Once?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Tell us what you need. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Quick contact */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="https://wa.me/917893789097"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-green-500/10 border border-green-500/25 hover:bg-green-500/15 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">WhatsApp Us</p>
                <p className="text-white/40 text-xs mt-0.5">Fastest way to reach us</p>
              </div>
            </a>

            <a
              href="mailto:trionemarketco@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-violet-600/10 border border-violet-500/25 hover:bg-violet-600/15 hover:border-violet-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                <Mail size={22} className="text-violet-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email Us</p>
                <p className="text-white/40 text-xs mt-0.5">We'll get back to you soon</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/trionemarketing.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-pink-500/10 border border-pink-500/25 hover:bg-pink-500/15 hover:border-pink-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                <Instagram size={22} className="text-pink-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Instagram</p>
                <p className="text-white/40 text-xs mt-0.5">@trionemarketing.co</p>
              </div>
            </a>

            {/* Services list */}
            <div className="p-5 rounded-2xl bg-navy-800/50 border border-white/10">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">We help with</p>
              {['Website Development', 'Cinematic Video Production', 'AI Business Agents', 'Custom Projects'].map((s) => (
                <div key={s} className="flex items-center gap-2 py-1.5 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-navy-800/60 backdrop-blur-sm border border-white/10 rounded-2xl p-7 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Ravi Kumar"
                    className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-navy-900/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-navy-900/80 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-navy-900">Select a service...</option>
                  <option value="Website Development" className="bg-navy-900">Website Development</option>
                  <option value="Cinematic Video" className="bg-navy-900">Cinematic Video Production</option>
                  <option value="AI Business Agent" className="bg-navy-900">AI Business Agent</option>
                  <option value="All Three" className="bg-navy-900">All Three — Full Package</option>
                  <option value="Not Sure" className="bg-navy-900">Not Sure — Let's Talk</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Tell Us More</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Describe your business and what you're looking for..."
                  className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-navy-900/80 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 btn-glow"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send via WhatsApp
                  </>
                )}
              </button>
              <p className="text-center text-white/25 text-xs">
                This will open WhatsApp with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
