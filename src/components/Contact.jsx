import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value 
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({
        type: 'error',
        message: 'Could not connect to the server. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="reveal-on-scroll">
          <h2 className="text-[36px] font-heading font-extrabold text-center animated-heading">Get In Touch</h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-[600px] mx-auto mb-16">
            Have a project, job opening, or want to say hi? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left space-y-6 reveal-on-scroll">
            <h3 className="text-xl font-bold text-white">Connect Channels</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Feel free to reach out via email or check out my profiles on LinkedIn and GitHub.
            </p>
            
            {/* Small compact social badge row */}
            <div className="flex gap-3 flex-wrap pt-2">
              <a href="mailto:soumrakshit.builds@gmail.com" className="bg-bg-card border border-white/5 px-[18px] py-3 rounded-xl text-sm font-semibold tracking-wide text-slate-300 flex items-center gap-2.5 hover:border-emerald-500/40 hover:bg-emerald-500/8 hover:-translate-y-0.5 transition-all duration-300">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>soumrakshit.builds@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/soumrakshit/" target="_blank" rel="noopener noreferrer" className="bg-bg-card border border-white/5 px-[18px] py-3 rounded-xl text-sm font-semibold tracking-wide text-slate-300 flex items-center gap-2 hover:border-emerald-500/40 hover:bg-emerald-500/8 hover:-translate-y-0.5 transition-all duration-300">
                <i className="devicon-linkedin-plain text-lg text-emerald-400"></i> LinkedIn
              </a>
              <a href="https://github.com/soum-rakshit" target="_blank" rel="noopener noreferrer" className="bg-bg-card border border-white/5 px-[18px] py-3 rounded-xl text-sm font-semibold tracking-wide text-slate-300 flex items-center gap-2 hover:border-emerald-500/40 hover:bg-emerald-500/8 hover:-translate-y-0.5 transition-all duration-300">
                <i className="devicon-github-original text-lg text-emerald-400"></i> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-bg-card border border-white/5 p-8 rounded-2xl flex flex-col gap-5 text-left reveal-on-scroll">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full bg-white/3 border border-white/5 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white/6 transition-all duration-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full bg-white/3 border border-white/5 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white/6 transition-all duration-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hey Soumyadeep, let's build something awesome..."
                className="w-full min-h-[120px] bg-white/3 border border-white/5 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white/6 transition-all duration-300 resize-y"
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`px-4 py-3 rounded-lg text-sm font-semibold text-center border ${
                status.type === 'success' 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 self-start"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
