import { useState, useEffect, FormEvent } from 'react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export default function ContactSection({ preselectedService, onClearPreselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    selectedServices: [],
    projectDetails: '',
    budget: '',
    urgency: 'Standard (1-2 Weeks)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const availableServices = [
    'Brand Identity & Logo',
    'Social Media Creatives',
    'Print & Poster Design',
    'Packaging & Labels',
    'Business & Corporate Stationery',
    'Creative & Digital Visuals'
  ];

  const budgetOptions = [
    'Flexible / Seeking Quote',
    '< $300 (₹25,000)',
    '$300 – $800 (₹25k – ₹65k)',
    '$800 – $2,000 (₹65k – ₹1.6L)',
    '$2,000+ (Comprehensive Brand System)'
  ];

  useEffect(() => {
    if (preselectedService) {
      // Find matching or add
      const match = availableServices.find(s => 
        s.toLowerCase().includes(preselectedService.toLowerCase()) || 
        preselectedService.toLowerCase().includes(s.toLowerCase().split(' ')[0])
      );
      const serviceToAdd = match || preselectedService;

      setFormData(prev => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(serviceToAdd)
          ? prev.selectedServices
          : [...prev.selectedServices, serviceToAdd]
      }));
    }
  }, [preselectedService]);

  const toggleService = (srv: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const generateWhatsAppUrl = () => {
    const servicesList = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') 
      : 'General Inquiry';
    
    const message = `Hello SLR GRAPHICS! I'd like to start a project.
*Name:* ${formData.name || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Phone/WhatsApp:* ${formData.phone || 'Not provided'}
*Services Needed:* ${servicesList}
*Budget Range:* ${formData.budget || 'Open for discussion'}
*Project Details:* ${formData.projectDetails || 'I need creative graphic design work.'}`;

    return `https://wa.me/917004953962?text=${encodeURIComponent(message)}`;
  };

  const generateMailtoUrl = () => {
    const servicesList = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') 
      : 'Creative Design Solutions';
    
    const subject = encodeURIComponent(`Project Inquiry: ${formData.name || 'New Client'} — ${servicesList}`);
    const body = encodeURIComponent(`Hello SLR GRAPHICS Team,

I'm reaching out regarding a design project:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Services Required: ${servicesList}
Budget: ${formData.budget || 'Flexible'}
Timeline: ${formData.urgency}

Project Details:
${formData.projectDetails}

Looking forward to hearing from you!`);

    return `mailto:${STUDIO_CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyInquirySummary = () => {
    const summary = `SLR GRAPHICS Project Inquiry
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Services: ${formData.selectedServices.join(', ') || 'General'}
Budget: ${formData.budget || 'Flexible'}
Details: ${formData.projectDetails}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#1B1035] overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#A855F7]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241647] border border-purple-600/30 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            HAVE A PROJECT IN MIND?
          </h2>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#A855F7] mb-4">
            LET'S CREATE SOMETHING AMAZING.
          </h3>

          <p className="text-sm sm:text-base text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Whether you need a new brand identity, social media creatives, packaging, advertising, or print design, let's bring your idea to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Studio Access Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#241647]/50 border border-purple-700/30 rounded-3xl p-7 shadow-xl">
              <h4 className="font-display font-bold text-lg text-white mb-2">
                DIRECT STUDIO CHANNELS
              </h4>
              <p className="text-xs text-purple-300/80 mb-6">
                Connect directly with our lead designers for immediate quotes, consultations, and availability checks.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Card */}
                <a
                  href={STUDIO_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#120A24] border border-emerald-500/30 hover:border-emerald-400/60 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-base font-bold text-white">
                      {STUDIO_CONTACT.phone}
                    </div>
                    <div className="text-[11px] text-purple-300/70">
                      Tap to message directly on WhatsApp
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${STUDIO_CONTACT.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#120A24] border border-purple-600/30 hover:border-purple-400/60 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#A855F7] tracking-wider uppercase">
                      Official Studio Email
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      {STUDIO_CONTACT.email}
                    </div>
                    <div className="text-[11px] text-purple-300/70">
                      Send briefs & RFP documents
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Guarantees Badges */}
              <div className="mt-8 pt-6 border-t border-purple-800/40 space-y-3">
                <div className="flex items-center gap-3 text-xs text-purple-200">
                  <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Rapid response within 1–2 hours during studio business hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-purple-200">
                  <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Serving clients worldwide with production-ready deliverables</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% bespoke designs — zero generic marketplace templates</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Quote Pill Card */}
            <div className="bg-gradient-to-r from-[#7C3AED]/20 to-[#A855F7]/20 border border-purple-600/40 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-[#A855F7]" />
                <h5 className="font-display font-bold text-sm text-white">Need a Fast Estimate?</h5>
              </div>
              <p className="text-xs text-purple-200/80 mb-4">
                You can ping our design desk on WhatsApp with your project brief right now for an immediate ballpark quote.
              </p>
              <a
                href={STUDIO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp: 7004953962</span>
              </a>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#241647]/50 border border-purple-700/30 rounded-3xl p-6 sm:p-9 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">
                      PROJECT INQUIRY PREPARED!
                    </h3>
                    <p className="text-sm text-purple-200/90 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your project details have been formulated. Choose your preferred way to transmit your brief:
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#120A24] border border-purple-800/60 rounded-2xl p-4 text-left max-w-md mx-auto text-xs text-purple-200 space-y-2">
                    <div><strong className="text-purple-300">Name:</strong> {formData.name}</div>
                    <div><strong className="text-purple-300">Contact:</strong> {formData.phone || formData.email}</div>
                    <div><strong className="text-purple-300">Services:</strong> {formData.selectedServices.join(', ') || 'Graphic Design'}</div>
                    {formData.budget && <div><strong className="text-purple-300">Budget:</strong> {formData.budget}</div>}
                    <div><strong className="text-purple-300">Brief:</strong> {formData.projectDetails}</div>
                  </div>

                  {/* Action transmission buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp (7004953962)</span>
                    </a>

                    <a
                      href={generateMailtoUrl()}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      onClick={copyInquirySummary}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#120A24] border border-purple-700/50 hover:bg-[#1B1035] text-purple-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-purple-400 hover:text-white underline cursor-pointer"
                    >
                      ← Edit details / Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      START YOUR PROJECT
                    </h3>
                    <p className="text-xs text-purple-300/80">
                      Tell us about your brand vision, requirements, and scope.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
                        Your Name <span className="text-[#A855F7]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#120A24] border border-purple-800/60 focus:border-[#A855F7] focus:outline-none text-white text-sm placeholder:text-purple-400/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#A855F7]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#120A24] border border-purple-800/60 focus:border-[#A855F7] focus:outline-none text-white text-sm placeholder:text-purple-400/40"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number <span className="text-[#A855F7]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210 or your country code"
                      className="w-full px-4 py-3 rounded-xl bg-[#120A24] border border-purple-800/60 focus:border-[#A855F7] focus:outline-none text-white text-sm placeholder:text-purple-400/40"
                    />
                  </div>

                  {/* Services Multi-Select */}
                  <div>
                    <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
                      Service Required (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#7C3AED] text-white border border-[#A855F7] shadow-sm'
                                : 'bg-[#120A24] text-purple-300 border border-purple-800/50 hover:bg-[#1B1035]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '} {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
                      Project Details & Requirements <span className="text-[#A855F7]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Describe your business, your target audience, deliverables required, deadlines, or design aesthetic you love..."
                      className="w-full px-4 py-3 rounded-xl bg-[#120A24] border border-purple-800/60 focus:border-[#A855F7] focus:outline-none text-white text-sm placeholder:text-purple-400/40 resize-y"
                    />
                  </div>

                  {/* Budget (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#120A24] border border-purple-800/60 focus:border-[#A855F7] focus:outline-none text-white text-sm"
                    >
                      <option value="">Select an estimated budget bracket</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#120A24]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold text-xs tracking-wider uppercase hover:brightness-110 shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>START YOUR PROJECT →</span>
                    </button>

                    {/* Quick WhatsApp Send Shortcut */}
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#120A24] hover:bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      title="Send directly via WhatsApp to 7004953962"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
