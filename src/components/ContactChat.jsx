import React, { useMemo, useRef, useState } from 'react';
import { Mail, Send, User, Phone, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';

function ContactForm({ onSubmitted }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // This is where a real API call would go. For now, simulate success.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      onSubmitted?.(form);
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-slate-900 font-semibold">
        <Mail size={18} className="text-sky-600"/> Contact the Clinic
      </div>
      <p className="text-sm text-slate-600 mt-1">Have a question or need to book? Send us a note and we’ll reply promptly.</p>
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="col-span-1">
          <label className="text-xs text-slate-600">Name</label>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 focus-within:ring-2 focus-within:ring-sky-200">
            <User size={16} className="text-slate-400"/>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" className="w-full outline-none bg-transparent text-sm" />
          </div>
        </div>
        <div className="col-span-1">
          <label className="text-xs text-slate-600">Email</label>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 focus-within:ring-2 focus-within:ring-sky-200">
            <Mail size={16} className="text-slate-400"/>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full outline-none bg-transparent text-sm" />
          </div>
        </div>
        <div className="col-span-1">
          <label className="text-xs text-slate-600">Phone</label>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 focus-within:ring-2 focus-within:ring-sky-200">
            <Phone size={16} className="text-slate-400"/>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" className="w-full outline-none bg-transparent text-sm" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="text-xs text-slate-600">Message</label>
          <div className="mt-1 rounded-lg border border-slate-200 focus-within:ring-2 focus-within:ring-sky-200">
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us how we can help..." className="w-full resize-none outline-none bg-transparent text-sm p-3" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 flex items-center justify-between">
          {sent ? (
            <div className="inline-flex items-center gap-2 text-emerald-700 text-sm">
              <CheckCircle2 size={16}/> Sent! We’ll be in touch shortly.
            </div>
          ) : (
            <div className="text-xs text-slate-500">We typically respond within 10 minutes during business hours.</div>
          )}
          <button disabled={loading} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 transition disabled:opacity-60">
            {loading ? (<><Loader2 size={16} className="animate-spin"/> Sending</>) : (<><Send size={16}/> Send</>)}
          </button>
        </div>
      </form>
    </div>
  );
}

function ChatMessage({ role, content }) {
  const isAgent = role === 'assistant';
  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${isAgent ? 'bg-slate-50 border border-slate-200 text-slate-800' : 'bg-sky-600 text-white'}`}>
        {content}
      </div>
    </div>
  );
}

function ChatBox() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your care concierge. Ask about services, pricing, or booking—happy to help!' },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [contactReady, setContactReady] = useState({ name: '', email: '' });
  const bottomRef = useRef(null);

  const quickPrompts = useMemo(() => [
    'What\'s included in a cleaning?',
    'Do you offer Invisalign consultations?',
    'How soon can I book an appointment?',
  ], []);

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

  const fakeReply = (userText) => {
    setBusy(true);
    // Simple rule-based assistant reply (placeholder for future API integration)
    const lower = userText.toLowerCase();
    let reply = "Thanks for reaching out! A coordinator will email you shortly.";
    if (lower.includes('invisalign')) reply = 'Yes! We offer complimentary Invisalign assessments. Most plans start the same day.';
    else if (lower.includes('price') || lower.includes('cost')) reply = 'Pricing varies by treatment; we provide transparent estimates after a quick exam.';
    else if (lower.includes('book') || lower.includes('appointment')) reply = 'We have openings this week. Share your email and preferred times—our team will confirm.';

    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
      setBusy(false);
      scrollToBottom();
    }, 650);
  };

  const handleSend = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setMessages((m) => [...m, { role: 'user', content }]);
    setInput('');
    scrollToBottom();
    fakeReply(content);
  };

  const handleSendToEmail = () => {
    const { name, email } = contactReady;
    if (!email || !name) return;
    // This is where you would call your backend hooked to Resend later.
    // For now, we just append a confirmation message.
    setMessages((m) => [
      ...m,
      { role: 'assistant', content: `Thanks ${name}! We\'ll reach out at ${email} to continue this conversation.` },
    ]);
    setContactReady({ name: '', email: '' });
    scrollToBottom();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-0 shadow-sm overflow-hidden flex flex-col h-[480px]">
      <div className="px-4 py-3 border-b border-slate-200 bg-gradient-to-r from-sky-600 to-sky-500 text-white flex items-center justify-between">
        <div className="inline-flex items-center gap-2 font-semibold"><MessageCircle size={18} className="opacity-90"/> Live Concierge</div>
        {busy && <div className="text-xs opacity-90">Typing…</div>}
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-slate-50/60">
        {messages.map((m, idx) => (
          <ChatMessage key={idx} role={m.role} content={m.content} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="border-t border-slate-200 p-3 bg-white">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {quickPrompts.map((q) => (
            <button key={q} onClick={() => handleSend(q)} className="text-xs rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 transition">
              {q}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your message…" className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"/>
          <button onClick={() => handleSend()} className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-white text-sm font-medium hover:bg-sky-700 transition">
            <Send size={16}/> Send
          </button>
        </div>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <input value={contactReady.name} onChange={(e) => setContactReady((c) => ({ ...c, name: e.target.value }))} placeholder="Your name" className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"/>
          <input type="email" value={contactReady.email} onChange={(e) => setContactReady((c) => ({ ...c, email: e.target.value }))} placeholder="Your email" className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"/>
          <button onClick={handleSendToEmail} className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm font-medium hover:bg-emerald-700 transition">
            <Mail size={16}/> Send to Clinic
          </button>
        </div>
        <p className="mt-2 text-[11px] text-slate-500">This chat is for demonstration. We’ll connect it to email via Resend on request.</p>
      </div>
    </div>
  );
}

export default function ContactChat() {
  return (
    <section id="contact" className="relative w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Were Here for Your Best Smile</h2>
          <p className="mt-3 text-slate-600">Reach out for appointments, pricing, or second opinions. Our concierge is ready to help.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <ContactForm onSubmitted={() => {}} />
          <ChatBox />
        </div>

        <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-slate-700">
          <p className="text-sm">By messaging us, you agree to receive communication about your care. We respect your privacy and never share your information.</p>
        </div>
      </div>
    </section>
  );
}
