import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject line is required";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct genuine mailto URL ensuring real communication
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Sandesh,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nContact Email: ${formData.email}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open email client
    window.location.href = mailtoUrl;

    setSubmittedStatus({
      success: true,
      message: "Your default email client has been opened with your pre-filled inquiry. You can also contact directly at sandeshbobade8055@gmail.com!"
    });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Interested in hiring me as a Java Full Stack Developer? I would love to connect and discuss how I can contribute to your engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mb-6">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email item with copy */}
                <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block uppercase tracking-wider">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-blue-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item with copy */}
                <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block uppercase tracking-wider">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-purple-400 transition-colors truncate block"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block uppercase tracking-wider">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social profile buttons */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-3">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Email Launcher Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/25 to-purple-900/25 border border-blue-500/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                  Prefer direct emailing?
                </h4>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
                  Click to launch your system email application.
                </p>
              </div>
              <a
                href={`mailto:${personalInfo.email}?subject=Job%20Opportunity%20-%20Java%20Full%20Stack%20Developer`}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shrink-0 shadow-sm"
              >
                Send Email
              </a>
            </div>

          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mb-6">
              Fill in the form below to initiate an inquiry or schedule an interview.
            </p>

            {submittedStatus && (
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm text-blue-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{submittedStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Interview Invitation"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    errors.subject ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                  }`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sandesh, we reviewed your Java Full Stack profile and would like to discuss..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 active:scale-95 group"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

