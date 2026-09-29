import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, ChevronDown, Sparkles, Heart, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { categories, services } from '../data/services';

export default function CTA() {
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const requestedService = searchParams.get('service');
  const matchedService = services.find((item) => item.name === requestedService);
  const initialCategory = categories.includes(requestedCategory) && requestedCategory !== 'All'
    ? requestedCategory
    : matchedService?.category || '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(
    matchedService?.category === initialCategory ? matchedService.name : ''
  );
  const serviceOptions = services
    .filter((item) => !selectedCategory || item.category === selectedCategory)
    .map((item) => item.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedCategory || !selectedService) {
      alert("Please select a service category and service before submitting.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call / Form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setSelectedService(""); // Reset for next time
    }, 1500);
  };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 bg-[#FFF9FF]">
      {/* 
        FIX APPLIED: Removed overflow-hidden from this main wrapper 
        so the dropdown can overflow freely over the background. 
      */}
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#351132] shadow-2xl flex flex-col lg:flex-row">
        
        {/* Left Content / Branding 
            Moved overflow-hidden here to contain the blur effect, and explicitly rounded the corners 
        */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none p-10 lg:w-5/12 lg:p-16">
          <div className="absolute -left-[150px] -top-[150px] h-[300px] w-[300px] rounded-full bg-[#791B70]/40 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <p className="great-vibes-regular text-4xl text-[#D4AF37] sm:text-5xl">
              Your beauty moment
            </p>
            <h2 className="mt-2 font-display text-4xl leading-[1.1] text-white sm:text-5xl">
              Ready for your transformation?
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Book a consultation or appointment and choose the service that fits your occasion. Proudly serving clients at our luxurious parlour in Kalanivasal, Tamil Nadu.
            </p>
            
            <div className="mt-10 flex items-center gap-4">
              <a 
                href="tel:+910000000000" 
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10 hover:border-white/40"
              >
                <Phone size={15} /> 
                Call Us Directly
              </a>
            </div>
          </div>
        </div>

        {/* Right Form / Success State 
            Explicitly rounded the corners for this section
        */}
        <div className="bg-white p-8 sm:p-12 lg:w-7/12 rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-bl-none">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <h3 className="font-display text-2xl text-[#351132]">Reserve Your Spot</h3>
                  <p className="text-xs text-[#6F536D] mt-1 uppercase tracking-widest font-semibold">
                    Fill out the details below
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6">
                  
                  {/* Name & Phone Grid */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ContactField 
                      label="Full Name" 
                      name="name" 
                      placeholder="Enter your name" 
                      required 
                    />
                    <ContactField 
                      label="Phone Number" 
                      name="phone" 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required 
                    />
                  </div>

                  <ServiceDropdown
                    label="Service Category"
                    placeholder="Select a category"
                    options={categories.filter((category) => category !== 'All')}
                    selected={selectedCategory}
                    onSelect={(category) => {
                      setSelectedCategory(category);
                      setSelectedService('');
                    }}
                  />
                  <ServiceDropdown
                    label="Service of Interest"
                    placeholder="Select a service"
                    options={serviceOptions}
                    selected={selectedService} 
                    onSelect={setSelectedService}
                    disabled={!selectedCategory}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-[#791B70] px-5 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#351132] disabled:cursor-wait disabled:opacity-80"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending Request..." : "Book Appointment"}
                    </span>
                    {!isSubmitting && (
                      <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* Success Animation State */
              <SuccessMessage onReset={() => setSubmitted(false)} />
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   CONTACT FIELD COMPONENT
========================================================= */
function ContactField({ label, ...props }) {
  return (
    <div>
      <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F536D]">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-[#E7BDE6] bg-[#FFF9FF] px-4 py-3.5 text-sm text-[#351132] outline-none transition placeholder:text-[#E7BDE6] focus:border-[#791B70] focus:bg-white focus:ring-1 focus:ring-[#791B70]"
      />
    </div>
  );
}

/* =========================================================
   CUSTOM SERVICE DROPDOWN
========================================================= */
function ServiceDropdown({ selected, onSelect, options, label, placeholder, disabled = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F536D]">
        {label}
      </label>

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`mt-2 flex w-full items-center justify-between rounded-xl border-2 bg-white px-4 py-3 text-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
          open || selected
            ? "border-[#791B70]" 
            : "border-[#E7BDE6] hover:border-[#791B70]"
        }`}
      >
        <span className={selected ? "font-medium text-[#351132]" : "text-[#E7BDE6]"}>
          {selected || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 items-center justify-center rounded-md bg-[#791B70] text-white"
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-[#E7BDE6] bg-white p-2 shadow-xl shadow-[#791B70]/10"
          >
            {options.map((option) => {
              const isSelected = selected === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onSelect(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-sm transition-all ${
                    isSelected
                      ? "bg-[#f8f8f8] text-[#351132]"
                      : "text-[#6F536D] hover:bg-[#f8f8f8] hover:text-[#351132]"
                  }`}
                >
                  <span className="font-serif sm:font-sans">{option}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   SUCCESS ANIMATION COMPONENT
========================================================= */
function SuccessMessage({ onReset }) {
  const particles = Array.from({ length: 12 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex h-full min-h-[400px] flex-col items-center justify-center overflow-hidden"
    >
      {/* Expanding Particles */}
      {particles.map((_, index) => {
        const angle = (index / particles.length) * Math.PI * 2;
        const x = Math.cos(angle) * 120;
        const y = Math.sin(angle) * 120;

        return (
          <motion.span
            key={index}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{ x, y, opacity: 0, scale: [0, 1.5, 0.5] }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]"
          />
        );
      })}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: [0, 1.2, 0.95, 1], rotate: [-30, 10, -5, 0] }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#791B70] text-white shadow-xl shadow-[#791B70]/30"
        >
          <Heart size={40} fill="currentColor" className="text-white" />
          
          {/* Spinning dashed border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-[#791B70]/40"
          />
        </motion.div>

        {/* Success Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
            <Sparkles size={14} />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Request Received
            </p>
            <Sparkles size={14} />
          </div>

          <h3 className="mt-3 font-display text-3xl text-[#351132] sm:text-4xl">
            We can't wait to <br />
            <span className="text-[#791B70]">pamper you.</span>
          </h3>

          <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[#6F536D]">
            Your appointment request has been securely delivered. One of our specialists will call you shortly to confirm your booking.
          </p>

          <button
            onClick={onReset}
            className="mt-8 text-xs font-bold uppercase tracking-widest text-[#E7BDE6] underline underline-offset-4 transition hover:text-[#791B70]"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}