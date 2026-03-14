import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  FileText, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
  Sparkles,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Briefcase,
  ArrowLeft,
  MessageCircle
} from 'lucide-react';
import AIPlanner from './components/AIPlanner';

// --- Icons ---

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Components ---

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.link/s9zfgm"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
    >
      <WhatsAppIcon size={32} />
      <div className="absolute right-full mr-4 bg-white text-black text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with us on WhatsApp
      </div>
    </motion.a>
  );
};

const PremiumBackground = () => {
  return (
    <motion.div 
      animate={{ 
        backgroundColor: ["#0D0202", "#1e1b4b", "#4c1d95", "#581c87", "#0D0202"] 
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Base Noise */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      
      {/* Animated Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-primary/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-brand-secondary/30 blur-[120px] rounded-full"
      />
      
      {/* Sharp Lines / Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_90%)]" />
    </motion.div>
  );
};

const NoticeBanner = () => {
  return (
    <div className="bg-brand-primary text-white py-2 px-6 text-center relative z-[70]">
      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span className="opacity-80">Grand Opening:</span> 
          <span>15 March 2026</span>
        </span>
        <span className="hidden md:inline-block w-px h-3 bg-white/30" />
        <span className="flex items-center gap-2">
          <Sparkles size={14} className="animate-bounce" />
          <span className="font-black">Special Offer: 30% OFF on Website Development</span>
          <Sparkles size={14} className="animate-bounce" />
        </span>
      </p>
    </div>
  );
};

const Navbar = ({ setView, currentView }: { setView: (v: string) => void, currentView: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'AI Planner', 'Work', 'Process', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0202]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'} ${scrolled ? 'translate-y-0' : 'translate-y-[32px] md:translate-y-[36px]'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="https://i.ibb.co/tp7QCXh0/IMG-20260312-041840.jpg" 
            alt="Walt Designs & Studio" 
            className="h-12 w-auto object-contain rounded-sm transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-2xl tracking-tighter uppercase group-hover:text-brand-primary transition-colors">Walt Designs & Studio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={item === 'Work' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`} 
              onClick={(e) => {
                if (item === 'Work') {
                  e.preventDefault();
                  setView('work');
                } else if (currentView === 'work') {
                  e.preventDefault();
                  setView('home');
                  setTimeout(() => {
                    const id = item.toLowerCase().replace(' ', '-');
                    const el = document.getElementById(id);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className={`text-sm font-medium uppercase tracking-widest hover:text-brand-primary transition-colors ${currentView === item.toLowerCase() ? 'text-brand-primary' : ''}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => {
              if (currentView === 'work') {
                e.preventDefault();
                setView('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-colors"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={item === 'Work' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => {
                  setIsOpen(false);
                  if (item === 'Work') {
                    e.preventDefault();
                    setView('work');
                  } else if (currentView === 'work') {
                    e.preventDefault();
                    setView('home');
                    setTimeout(() => {
                      const id = item.toLowerCase().replace(' ', '-');
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="text-xl font-display uppercase tracking-widest hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features, badge }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-brand-primary transition-all duration-500 group relative overflow-hidden"
    >
      {badge && (
        <div className="absolute top-4 right-4 z-20">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-brand-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-brand-primary/20"
          >
            {badge}
          </motion.div>
        </div>
      )}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors" />
      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-display uppercase mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3">
        {features.map((f: string) => (
          <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
            <CheckCircle2 size={14} className="text-brand-primary" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xreylalq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-brand-primary text-white">
        <CheckCircle2 size={64} className="mb-6" />
        <h3 className="text-4xl font-display uppercase mb-4">Message Received!</h3>
        <p className="text-lg font-medium">We'll get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 px-8 py-3 border-2 border-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500 text-red-200 text-sm text-center">
          Oops! Something went wrong. Please try again or email us directly.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              required
              name="name"
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-brand-primary outline-none transition-all focus:bg-white/[0.08]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              required
              name="email"
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-brand-primary outline-none transition-all focus:bg-white/[0.08]"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              required
              name="phone"
              type="tel" 
              placeholder="7303942175"
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-brand-primary outline-none transition-all focus:bg-white/[0.08]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">What do you need?</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <select 
              required
              name="service"
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-brand-primary outline-none transition-all focus:bg-white/[0.08] appearance-none"
            >
              <option value="">Select a service</option>
              <option value="website">Website Development</option>
              <option value="resume">Resume & CV Design</option>
              <option value="license">License Creation</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message (Optional)</label>
        <textarea 
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-primary outline-none transition-all focus:bg-white/[0.08] resize-none"
        />
      </div>

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-5 bg-brand-primary text-white font-display text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : (
          <>
            Send Inquiry <ArrowRight size={20} />
          </>
        )}
      </button>
    </form>
  );
};

const IndiaDigitalMap = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error("API Key Missing");
        }
        const { GoogleGenAI } = await import("@google/genai");
        const ai = new GoogleGenAI({ apiKey });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A futuristic, high-tech map of India showing glowing digital networks, fiber optic lines, and data nodes. Dark blue and purple color scheme with neon cyan accents. Cinematic lighting, professional digital art style, isolated on dark background.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1"
            }
          }
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error: any) {
        console.error("Failed to generate India map:", error);
        // Fallback to a high-quality placeholder if generation fails or key is invalid
        setImageUrl("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800");
        
        if (error?.message?.includes('API key not valid') || error?.message?.includes('API_KEY_INVALID')) {
          console.warn("Gemini API Key is invalid. Check Settings menu.");
        }
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="flex items-center gap-6 mb-12"
    >
      <div className="relative group">
        <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center relative">
          {loading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-[8px] uppercase tracking-widest text-zinc-500">Generating...</span>
            </div>
          ) : (
            <img 
              src={imageUrl || ""} 
              alt="India Digital Map" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full -z-10 animate-pulse" />
      </div>
      <div>
        <div className="text-brand-primary font-display text-3xl md:text-4xl uppercase tracking-widest">Digital Era</div>
        <div className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Empowering India's Future</div>
      </div>
    </motion.div>
  );
};

const WorkPage = ({ setView }: { setView: (v: string) => void }) => {
  const products = [
    {
      id: 1,
      title: "Website Making",
      subtitle: "Web Designing",
      price: "3549",
      discount: "30% OFF",
      finalPrice: "2484",
      icon: Globe,
      features: ["Custom UI/UX", "Responsive Design", "SEO Ready", "Fast Loading"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "Licence Registration",
      subtitle: "FSSAI, GST, NIOS, SOSE, Domain, Trademark etc.",
      price: "300 + govt charges",
      icon: FileText,
      features: ["Document Verification", "Fast Processing", "Expert Support", "Legal Compliance"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Premium Business Bundle",
      subtitle: "E-Commerce, Zomato/Swiggy, Google Verification, Digital Showroom",
      price: "1500",
      badge: "Premium Category",
      icon: Zap,
      features: ["Platform Setup", "Business Verification", "Digital Presence", "Growth Strategy"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Creative & Promotion",
      subtitle: "Thumbnail, Catalog, Advertisement, Resume, CV Making",
      price: "300 - 1600",
      icon: Briefcase,
      features: ["Graphic Design", "Professional CV", "Ad Campaigns", "Brand Promotion"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#062016] text-white pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-sm font-bold">Back to Home</span>
        </motion.button>

        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-emerald-400 uppercase tracking-[0.4em] mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display uppercase leading-none"
          >
            Digital <br /> Products.
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-12 mt-12"
          >
            <div className="flex flex-col">
              <span className="text-4xl font-display text-emerald-400">300+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display text-white">50+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Active Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display text-white">4.9/5</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Average Rating</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-10 blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                  <product.icon size={28} className="text-emerald-400 group-hover:text-white transition-colors" />
                </div>

                {product.badge && (
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">
                    {product.badge}
                  </div>
                )}

                <h4 className="text-2xl font-display uppercase mb-2 leading-tight">{product.title}</h4>
                <p className="text-zinc-400 text-xs mb-6 font-medium leading-relaxed">{product.subtitle}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-300">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-4xl font-display text-white tracking-tighter">
                        {product.finalPrice ? `₹${product.finalPrice}` : (
                          product.price.includes('+') ? `₹${product.price.split(' +')[0]}` : 
                          (product.price.includes('-') ? `₹${product.price}` : `₹${product.price}`)
                        )}
                      </span>
                      
                      {product.price.includes('+') && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/60 bg-emerald-400/5 px-2 py-1 rounded-sm border border-emerald-400/10">
                          + {product.price.split('+')[1].trim()}
                        </span>
                      )}
                      
                      {product.finalPrice && (
                        <span className="text-sm text-zinc-500 line-through decoration-emerald-500/50 font-medium">₹{product.price}</span>
                      )}
                    </div>
                    
                    {product.discount && (
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-emerald-500 text-emerald-950 text-[10px] font-black uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                          {product.discount}
                        </div>
                        <div className="text-[9px] font-bold text-emerald-400/70 uppercase tracking-[0.3em] italic">
                          Special Launch Price
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full mt-8 py-4 bg-emerald-500 text-white font-display text-sm uppercase tracking-widest hover:bg-white hover:text-emerald-900 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Order Now <ShoppingCart size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#0D0202] selection:bg-brand-primary selection:text-white relative">
      <PremiumBackground />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full z-50">
          <NoticeBanner />
        </header>
        <Navbar setView={setCurrentView} currentView={currentView} />
      <FloatingWhatsApp />

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Digital Craftsmanship Studio</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-[120px] font-display leading-[0.9] uppercase tracking-tighter mb-8">
                    We Build <span className="text-brand-primary">Digital</span> <br />
                    Masterpieces.
                  </h1>

                  <IndiaDigitalMap />
                  
                  <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
                    Walt Designs & Studio transforms your vision into high-converting digital experiences. We are dedicated to building the Digital Era in India.
                  </p>

                  <div className="flex flex-wrap gap-12 mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-4xl md:text-5xl font-display text-brand-primary">300+</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Projects Created</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-4xl md:text-5xl font-display text-white">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Client Satisfaction</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-4xl md:text-5xl font-display text-white">24/7</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Expert Support</div>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a 
                      href="#contact" 
                      className="px-10 py-5 bg-brand-primary text-white font-display text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3"
                    >
                      Start Your Project <ArrowRight size={20} />
                    </a>
                    <button 
                      onClick={() => setCurrentView('work')}
                      className="px-10 py-5 border-2 border-white/10 text-white font-display text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                    >
                      View Work
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-20 top-1/4 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
              <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full" />
            </section>

            {/* Services Section */}
            <section id="services" className="py-32">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                  <div className="max-w-2xl">
                    <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">What We Do</h2>
                    <h3 className="text-5xl md:text-7xl font-display uppercase leading-none">
                      Elite Services for <br /> Modern Brands.
                    </h3>
                  </div>
                  <p className="text-zinc-500 max-w-sm text-lg">
                    Specialized digital solutions designed to elevate your professional presence and business performance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ServiceCard 
                    icon={Globe}
                    title="Website Making"
                    badge="30% OFF"
                    description="High-performance, responsive websites built with the latest technologies to drive conversions and engagement."
                    features={['Custom UI/UX Design', 'E-commerce Solutions', 'SEO Optimization', 'Speed Performance']}
                  />
                  <ServiceCard 
                    icon={FileText}
                    title="Resume & CV Making"
                    description="Professional, ATS-friendly resumes and CVs that stand out to recruiters and land you your dream job."
                    features={['ATS-Optimized Layout', 'Keyword Strategy', 'Visual Branding', 'Cover Letter Design']}
                  />
                  <ServiceCard 
                    icon={Award}
                    title="Licence Creation"
                    description="Digital license and certificate design for courses, products, and software with secure verification features."
                    features={['Custom Branding', 'QR Code Integration', 'Digital Security', 'Print-Ready Formats']}
                  />
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-32 overflow-hidden relative border-y border-white/5 bg-brand-primary/5 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                  <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Our Process</h2>
                  <h3 className="text-5xl md:text-7xl font-display uppercase">How We Work</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                  {/* Pipeline Animation Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0 overflow-hidden">
                    <motion.div 
                      animate={{ 
                        x: ["-100%", "100%"] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                    />
                  </div>
                  
                  {[
                    { step: '01', title: 'Discovery', desc: 'We dive deep into your goals and target audience.' },
                    { step: '02', title: 'Strategy', desc: 'Creating a roadmap for your digital success.' },
                    { step: '03', title: 'Design', desc: 'Crafting the visual identity and user experience.' },
                    { step: '04', title: 'Launch', desc: 'Testing, refining, and going live to the world.' },
                  ].map((item, index) => (
                    <motion.div 
                      key={item.step} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative z-10 bg-zinc-900/80 backdrop-blur-md p-8 border border-white/5 hover:border-brand-primary transition-colors group"
                    >
                      <div className="text-8xl font-display text-white mb-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">{item.step}</div>
                      <h4 className="text-2xl font-display uppercase mb-4 text-brand-primary">{item.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                      
                      <motion.div 
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0.95, 1.05, 0.95]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.5 
                        }}
                        className="absolute inset-0 border-2 border-white/10 pointer-events-none"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <AIPlanner />
          </motion.div>
        ) : (
          <motion.div
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WorkPage setView={setCurrentView} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section - Always Visible */}
      <section id="contact" className={`py-32 transition-colors duration-500 ${currentView === 'work' ? 'bg-[#062016]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center lg:text-left mb-16">
            <h2 className={`text-sm font-bold uppercase tracking-[0.3em] mb-4 ${currentView === 'work' ? 'text-emerald-400' : 'text-brand-primary'}`}>Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-display uppercase leading-none">
              Let's Build <br className="hidden lg:block" /> Something <br className="hidden lg:block" /> Iconic.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-xl text-zinc-400 mb-12 max-w-md">
                Ready to elevate your brand? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 bg-zinc-900 border border-white/10 flex items-center justify-center ${currentView === 'work' ? 'text-emerald-400' : 'text-brand-primary'}`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Us</div>
                    <div className="text-xl font-medium">waltdesignsstudio@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 bg-zinc-900 border border-white/10 flex items-center justify-center ${currentView === 'work' ? 'text-emerald-400' : 'text-brand-primary'}`}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Call Us</div>
                    <div className="text-xl font-medium">7303942175</div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-wrap gap-6">
                <a 
                  href="https://wa.link/s9zfgm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 transition-all ${currentView === 'work' ? 'hover:text-emerald-400 hover:border-emerald-400' : 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                  <WhatsAppIcon size={20} />
                </a>
                {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className={`w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 transition-all ${currentView === 'work' ? 'hover:text-emerald-400 hover:border-emerald-400' : 'hover:text-brand-primary hover:border-brand-primary'}`}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 p-8 md:p-12 relative">
              <div className={`absolute -top-4 -right-4 w-24 h-24 blur-3xl pointer-events-none ${currentView === 'work' ? 'bg-emerald-500/20' : 'bg-brand-primary/20'}`} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src="https://i.ibb.co/tp7QCXh0/IMG-20260312-041840.jpg" 
                alt="Walt Designs & Studio" 
                className="h-10 w-auto object-contain rounded-sm transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-xl tracking-tighter uppercase group-hover:text-brand-primary transition-colors">Walt Designs & Studio</span>
            </a>

            <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

            <div className="text-xs font-bold uppercase tracking-widest text-zinc-600">
              © 2026 Walt Designs & Studio. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
