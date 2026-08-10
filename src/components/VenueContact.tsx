import React, { useState } from "react";
import { secretariatMembers } from "../data/leadership";
import { eventConfig } from "../data/config";
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const VenueContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Field Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate API submission cleanly
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* VENUE SECTION */}
        <div>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
              SUMMIT LOCATION
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F2EBDD]">
              THE VENUE
            </h2>
            <div className="w-20 h-[2px] bg-[#C8A45D] mt-3" />
          </div>

          <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-lg bg-[#10162B] border-2 border-[#C8A45D]/40 text-center shadow-2xl space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#080B16] border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] mx-auto">
              <MapPin className="w-7 h-7" />
            </div>

            <span className="text-xs font-sans-ui font-bold tracking-[0.25em] text-[#A9432B] uppercase block">
              OFFICIAL VENUE STATUS
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#F2EBDD]">
              {eventConfig.venue}
            </h3>

            <p className="font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/70 max-w-xl mx-auto leading-relaxed">
              Official campus auditorium and parliamentary hall arrangements are currently being finalized by the Secretariat. Confirmed venue directions and accommodation guidelines will be notified to registered delegates.
            </p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
              GET IN TOUCH
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
              HAVE A QUESTION?
            </h2>
            <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2">
              Direct assistance from the Organising Secretariat.
            </p>
            <div className="w-20 h-[2px] bg-[#C8A45D] mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xs font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase border-b border-[#C8A45D]/20 pb-3">
                SECRETARIAT CONTACT HOTLINES
              </h3>

              {secretariatMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-[#10162B] border border-[#C8A45D]/25 hover:border-[#C8A45D] transition-colors"
                >
                  <span className="text-[10px] font-sans-ui font-bold text-[#C8A45D] uppercase block mb-1">
                    {member.role}
                  </span>
                  <h4 className="font-serif-editorial text-xl font-bold text-[#F2EBDD] mb-3">
                    {member.name}
                  </h4>

                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="px-3 py-1.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs font-sans-ui text-[#F2EBDD] hover:text-[#C8A45D] flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C8A45D]" /> Call
                    </a>

                    <a
                      href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs font-sans-ui text-emerald-400 hover:bg-emerald-500/20 flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-lg bg-[#10162B] border border-[#C8A45D]/30 shadow-2xl space-y-5"
              >
                <h3 className="text-xs font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase border-b border-[#C8A45D]/20 pb-3 mb-6">
                  SEND AN OFFICIAL INQUIRY
                </h3>

                {status === "error" && (
                  <div className="p-4 rounded bg-[#A9432B]/20 border border-[#A9432B] text-xs font-sans-ui text-[#F2EBDD] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#A9432B]" /> {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div className="p-4 rounded bg-emerald-500/20 border border-emerald-500 text-xs font-sans-ui text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Your message has been logged. The Secretariat will respond shortly.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-sans-ui text-[#F2EBDD]/80 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full p-2.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans-ui text-[#F2EBDD]/80 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full p-2.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-sans-ui text-[#F2EBDD]/80 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-2.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans-ui text-[#F2EBDD]/80 block mb-1">
                      Institution / School
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="e.g. Banaras Hindu University"
                      className="w-full p-2.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-sans-ui text-[#F2EBDD]/80 block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Delegation Allotment Query"
                    className="w-full p-2.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-sans-ui text-[#F2EBDD]/80 block mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your inquiry or portfolio request..."
                    className="w-full p-2.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 rounded text-xs font-sans-ui font-bold tracking-widest text-[#080B16] bg-[#C8A45D] hover:bg-[#D8C8A8] transition-colors flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
