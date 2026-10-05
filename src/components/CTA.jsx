import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Phone,
  Sparkles,
  Heart,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { menCategories, menServices } from '../data/menServices';
import { womenCategories, womenServices } from '../data/womenServices';
import { kidsCategories, kidsServices } from '../data/kidsServices';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;;

export default function CTA() {
  const [searchParams] = useSearchParams();
  const requestedGender = searchParams.get('gender');
  const requestedCategory = searchParams.get('category');
  const requestedService = searchParams.get('service');
  
  const initialGender = ['men', 'kids'].includes(requestedGender) ? requestedGender : 'women';
  
  const initialServices =
    initialGender === 'men' ? menServices : initialGender === 'kids' ? kidsServices : womenServices;
    
  const initialCategories =
    initialGender === 'men' ? menCategories : initialGender === 'kids' ? kidsCategories : womenCategories;
    
  const matchedService = initialServices.find((item) => item.name === requestedService);
  
  const initialCategory = initialCategories.includes(requestedCategory) && requestedCategory !== 'All'
    ? requestedCategory
    : matchedService?.category || '';
    
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedGender, setSelectedGender] = useState(initialGender);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(
    matchedService?.category === initialCategory ? matchedService.name : ''
  );
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  
  const categories =
    selectedGender === 'men' ? menCategories : selectedGender === 'kids' ? kidsCategories : womenCategories;
    
  const services =
    selectedGender === 'men' ? menServices : selectedGender === 'kids' ? kidsServices : womenServices;
    
  const serviceOptions = services
    .filter((item) => !selectedCategory || item.category === selectedCategory)
    .map((item) => item.name);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setSelectedCategory('');
    setSelectedService('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedGender || !selectedCategory || !selectedService) {
      window.alert("Please select a service type, category, and service before submitting.");
      return;
    }

    if (!appointmentDate || !appointmentTime) {
      window.alert("Please select an appointment date and time.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("REACT_APP_WEB3FORMS_ACCESS_KEY is missing.");
      window.alert(
        "Email service is not configured yet. Please contact us directly via phone."
      );
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Salon Appointment Request - ${name}`,
      from_name: "Diva Naturals Website",
      name,
      phone,
      email,
      service_type: selectedGender,
      category: selectedCategory,
      service: selectedService,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send appointment request.");
      }

      form.reset();
      setSelectedCategory("");
      setSelectedService("");
      setAppointmentDate('');
      setAppointmentTime('');
      setSubmitted(true);
      
    } catch (error) {
      console.error("Web3Forms submit failed:", error);
      window.alert(
        "Unable to send your request right now. Please try calling us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 bg-[#FFF9FF]">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#351132] shadow-2xl flex flex-col lg:flex-row">
        
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
                href="tel:+919842505037" 
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10 hover:border-white/40"
              >
                <Phone size={15} /> 
                Call Us Directly
              </a>
            </div>
          </div>
        </div>

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
                    <ContactField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <ServiceDropdown
                    label="Service Type"
                    placeholder="Select a service type"
                    options={['Women', 'Men', 'Kids']}
                    selected={selectedGender === 'men' ? 'Men' : selectedGender === 'kids' ? 'Kids' : 'Women'}
                    onSelect={(gender) => handleGenderChange(gender.toLowerCase())}
                  />

                  <ServiceDropdown
                    label="Service Category"
                    placeholder="Select a category"
                    options={categories}
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

                  <div className="grid gap-6 sm:grid-cols-2">
                    <AppointmentDatePicker
                      value={appointmentDate}
                      onChange={setAppointmentDate}
                    />
                    <AppointmentTimePicker
                      value={appointmentTime}
                      onChange={setAppointmentTime}
                    />
                  </div>

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
      <label htmlFor={props.id || props.name} className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F536D]">
        {label}
      </label>
      <input
        {...props}
        id={props.id || props.name}
        className="mt-2 w-full rounded-xl border border-[#E7BDE6] bg-[#FFF9FF] px-4 py-3.5 text-sm text-[#351132] outline-none transition placeholder:text-[#E7BDE6] focus:border-[#791B70] focus:bg-white focus:ring-1 focus:ring-[#791B70]"
      />
    </div>
  );
}

function localDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function displayDate(value) {
  if (!value) return '';
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

function AppointmentDatePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const todayValue = localDateValue(new Date());
  const firstWeekday = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0
  ).getDate();
  const monthLabel = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(visibleMonth);

  return (
    <div className="relative">
      <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F536D]">
        Appointment Date
      </label>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={`mt-2 flex w-full items-center justify-between rounded-xl border bg-[#FFF9FF] px-4 py-3.5 text-left text-sm outline-none transition focus:ring-1 focus:ring-[#791B70] ${
          open ? 'border-[#791B70]' : 'border-[#E7BDE6] hover:border-[#791B70]'
        }`}
      >
        <span className={value ? 'text-[#351132]' : 'text-[#B89BB6]'}>
          {value ? displayDate(value) : 'Choose a date'}
        </span>
        <CalendarDays size={18} className="shrink-0 text-[#791B70]" aria-hidden="true" />
      </button>
      <input type="hidden" name="appointmentDate" value={value} />

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Choose appointment date"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(20rem,calc(100vw-4rem))] rounded-2xl border border-[#E7BDE6] bg-white p-4 shadow-xl shadow-[#791B70]/15"
          >
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                disabled={
                  visibleMonth.getFullYear() === new Date().getFullYear() &&
                  visibleMonth.getMonth() === new Date().getMonth()
                }
                onClick={() =>
                  setVisibleMonth((month) =>
                    new Date(month.getFullYear(), month.getMonth() - 1, 1)
                  )
                }
                className="grid h-8 w-8 place-items-center rounded-full text-[#791B70] transition hover:bg-[#FFF9FF] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={18} />
              </button>
              <p className="text-sm font-semibold text-[#351132]">{monthLabel}</p>
              <button
                type="button"
                aria-label="Next month"
                onClick={() =>
                  setVisibleMonth((month) =>
                    new Date(month.getFullYear(), month.getMonth() + 1, 1)
                  )
                }
                className="grid h-8 w-8 place-items-center rounded-full text-[#791B70] transition hover:bg-[#FFF9FF]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-[#9B7A98]">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <span key={day} className="py-1">{day}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstWeekday }, (_, index) => (
                <span key={`blank-${index}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1;
                const dateValue = localDateValue(
                  new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day)
                );
                const isSelected = value === dateValue;
                const isPast = dateValue < todayValue;
                return (
                  <button
                    key={dateValue}
                    type="button"
                    disabled={isPast}
                    aria-pressed={isSelected}
                    onClick={() => {
                      onChange(dateValue);
                      setOpen(false);
                    }}
                    className={`grid aspect-square place-items-center rounded-full text-xs transition ${
                      isSelected
                        ? 'bg-[#791B70] font-semibold text-white'
                        : isPast
                          ? 'cursor-not-allowed text-[#D9CDD8]'
                          : 'text-[#6F536D] hover:bg-[#F8EAF7] hover:text-[#791B70]'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AppointmentTimePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('PM');
  const hours = Array.from({ length: 12 }, (_, index) => String(index + 1));
  const minutes = Array.from({ length: 12 }, (_, index) =>
    String(index * 5).padStart(2, '0')
  );

  const showPicker = () => {
    if (value) {
      const match = value.match(/^(\d{1,2}):(\d{2})\s(AM|PM)$/);
      if (match) {
        setHour(match[1]);
        setMinute(match[2]);
        setPeriod(match[3]);
      }
    }
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="relative">
      <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F536D]">
        Appointment Time
      </label>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={showPicker}
        className={`mt-2 flex w-full items-center justify-between rounded-xl border bg-[#FFF9FF] px-4 py-3.5 text-left text-sm outline-none transition focus:ring-1 focus:ring-[#791B70] ${
          open ? 'border-[#791B70]' : 'border-[#E7BDE6] hover:border-[#791B70]'
        }`}
      >
        <span className={value ? 'text-[#351132]' : 'text-[#B89BB6]'}>
          {value || 'Choose a time'}
        </span>
        <Clock3 size={18} className="shrink-0 text-[#791B70]" aria-hidden="true" />
      </button>
      <input type="hidden" name="appointmentTime" value={value} />

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Choose appointment time"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 w-[min(20rem,calc(100vw-4rem))] rounded-2xl border border-[#E7BDE6] bg-white p-4 shadow-xl shadow-[#791B70]/15"
          >
            <p className="mb-3 text-sm font-semibold text-[#351132]">
              Select a time
            </p>
            <div className="grid grid-cols-2 gap-3">
              <TimeOptionGroup
                label="Hour"
                options={hours}
                selected={hour}
                onSelect={setHour}
              />
              <TimeOptionGroup
                label="Minute"
                options={minutes}
                selected={minute}
                onSelect={setMinute}
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {['AM', 'PM'].map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={period === option}
                  onClick={() => setPeriod(option)}
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                    period === option
                      ? 'border-[#791B70] bg-[#791B70] text-white'
                      : 'border-[#E7BDE6] text-[#6F536D] hover:bg-[#FFF9FF]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                onChange(`${hour}:${minute} ${period}`);
                setOpen(false);
              }}
              className="mt-4 w-full rounded-lg bg-[#791B70] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#351132]"
            >
              Confirm Time
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TimeOptionGroup({ label, options, selected, onSelect }) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#9B7A98]">
        {label}
      </p>
      <div className="grid max-h-32 grid-cols-3 gap-1 overflow-y-auto rounded-lg bg-[#FFF9FF] p-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={selected === option}
            onClick={() => onSelect(option)}
            className={`rounded-md px-2 py-1.5 text-xs transition ${
              selected === option
                ? 'bg-[#791B70] font-semibold text-white'
                : 'text-[#6F536D] hover:bg-[#F2DFF1] hover:text-[#791B70]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
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