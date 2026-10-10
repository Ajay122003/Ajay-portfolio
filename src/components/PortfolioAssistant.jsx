import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Sparkles } from 'lucide-react'

const suggestions = ['What are Ajay’s main skills?', 'Tell me about his projects', 'Where did he study?', 'Is he open to opportunities?']

function getReply(question) {
  const query = question.toLowerCase()
  if (query.includes('skill') || query.includes('technology') || query.includes('tech stack')) return 'Ajay works with React, JavaScript, Tailwind CSS, Python, Django, FastAPI, MySQL, REST APIs, and MCP tools.'
  if (query.includes('project')) return 'His portfolio includes a restaurant ordering system, a fashion store, BloodLink, Python OOP exercises, and a task management system. Project details and available repositories are in the Projects section.'
  if (query.includes('education') || query.includes('study') || query.includes('degree')) return 'Ajay completed a B.E. in Electronics and Communication Engineering at Adithya Institute of Technology (2021–2025), with a CGPA of 7.25.'
  if (query.includes('experience') || query.includes('work') || query.includes('job')) return 'Ajay is a Full Stack Developer at SaaSTrail Venture Studio, working with React, Next.js, Django, FastAPI, MySQL, and MCP integrations.'
  if (query.includes('available') || query.includes('hire') || query.includes('opportun')) return 'Ajay is open to full-time roles, internships, and freelance projects. You can reach him at ajayelango54@gmail.com.'
  if (query.includes('contact') || query.includes('email') || query.includes('phone')) return 'You can contact Ajay at ajayelango54@gmail.com or +91 9342198948. He is based in Coimbatore, India.'
  return 'I can help with Ajay’s skills, projects, education, experience, or availability. For anything else, email him at ajayelango54@gmail.com.'
}

export default function PortfolioAssistant() {
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi! Ask me about Ajay’s skills, projects, or experience.' }])
  const [question, setQuestion] = useState('')
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages])

  function sendMessage(value = question) {
    const text = value.trim()
    if (!text) return
    setMessages((current) => [...current, { role: 'user', text }, { role: 'assistant', text: getReply(text) }])
    setQuestion('')
  }

  return (
    <div className="rounded-2xl border border-line bg-panel p-5 shadow-[0_18px_55px_-42px_rgba(32,36,33,0.45)] sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e9eee8] text-olive"><Sparkles size={18} /></div>
        <div><p className="text-sm font-bold text-ink">Ask about Ajay</p><p className="text-xs text-muted">Portfolio assistant</p></div>
        <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" aria-label="Assistant ready" />
      </div>
      <div ref={chatRef} aria-live="polite" className="mb-4 flex max-h-52 min-h-36 flex-col gap-2 overflow-y-auto pr-1">
        {messages.map((message, index) => <p key={`${message.role}-${index}`} className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-5 ${message.role === 'user' ? 'self-end rounded-br-sm bg-[#24352c] text-white' : 'self-start rounded-bl-sm bg-paper text-ink'}`}>{message.text}</p>)}
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)} className="rounded-full border border-line px-3 py-1.5 text-[11px] text-muted transition hover:border-rust hover:text-rust">{suggestion}</button>)}
      </div>
      <form onSubmit={(event) => { event.preventDefault(); sendMessage() }} className="flex gap-2">
        <label className="sr-only" htmlFor="portfolio-question">Ask a question</label>
        <input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a question…" className="min-w-0 flex-1 rounded-lg border border-line bg-paper px-3 py-2.5 text-sm outline-none placeholder:text-muted/70 focus:border-rust" />
        <button type="submit" aria-label="Send question" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-rust text-white transition hover:bg-rust-dark"><ArrowUp size={18} /></button>
      </form>
    </div>
  )
}
