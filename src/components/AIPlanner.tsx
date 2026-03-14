import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, ClipboardList, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from "@google/genai";

const AIPlanner = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API key is missing. Please add it in the Settings menu of AI Studio to use the AI Planner.");
      }
      // Initialize Gemini on the frontend as per guidelines
      const ai = new GoogleGenAI({ apiKey });
      
      const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an expert digital project planner for Walt Designs & Studio. 
        A customer has described their idea: "${prompt}". 
        
        Please provide a detailed project plan that includes:
        1. Project Overview & Scope
        2. Recommended Tech Stack or Design Style
        3. Key Features/Requirements
        4. Estimated Timeline (rough phases)
        5. Why Walt Designs is the perfect fit for this.
        
        Keep the tone professional, premium, and encouraging. Use Markdown formatting for clarity.`,
      });

      setResponse(result.text || 'Sorry, I couldn\'t generate a plan at this moment.');
    } catch (error: any) {
      console.error('AI Planner Error:', error);
      let errorMessage = error?.message || 'An unexpected error occurred.';
      
      // Check for specific API key invalid error
      if (errorMessage.includes('API key not valid') || errorMessage.includes('API_KEY_INVALID')) {
        errorMessage = "The Gemini API key provided is invalid. Please check the 'Settings' menu in AI Studio and ensure your GEMINI_API_KEY is correct and active.";
      }
      
      setResponse(`### ⚠️ Error\n\n${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-32 bg-[#0D0202] relative overflow-hidden">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[700px] h-[700px] bg-brand-accent/10 blur-[180px] rounded-full pointer-events-none" 
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="text-brand-accent animate-pulse" size={16} />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-accent">Intelligence x Creativity</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display uppercase mb-8 leading-[0.9] tracking-tighter"
          >
            Architect Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Future</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Input your vision. Our neural engine generates a comprehensive roadmap for your next digital masterpiece.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-1 md:p-1 rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
        >
          <div className="bg-[#120505] p-8 md:p-12 rounded-[1.4rem]">
            <div className="relative mb-10 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary/30 to-brand-accent/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
              <div className="relative">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your project goals, target audience, and desired aesthetic..."
                  className="w-full bg-white/[0.03] border border-white/10 p-8 pt-10 rounded-xl focus:border-brand-primary/50 outline-none transition-all focus:bg-white/[0.06] resize-none min-h-[180px] text-xl font-light placeholder:text-zinc-600"
                />
                <div className="absolute top-4 left-8 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/60">Project Brief</div>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={generatePlan}
                disabled={loading || !prompt.trim()}
                className="group relative overflow-hidden px-16 py-6 bg-brand-primary text-white font-display text-2xl uppercase tracking-[0.15em] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-4">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Synthesizing...
                    </>
                  ) : (
                    <>
                      Generate Roadmap <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </>
                  )}
                </span>
              </button>
            </div>

            <AnimatePresence>
              {response && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-16 p-10 bg-white/[0.02] border border-white/10 rounded-2xl relative">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                      <ClipboardList size={120} />
                    </div>
                    
                    <div className="prose prose-invert max-w-none 
                      prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-brand-accent
                      prose-p:text-zinc-300 prose-p:text-lg prose-p:leading-relaxed
                      prose-li:text-zinc-400 prose-li:text-lg
                      prose-strong:text-white prose-strong:font-bold
                      prose-hr:border-white/10">
                      <ReactMarkdown>{response}</ReactMarkdown>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-accent">
                          <Lightbulb size={24} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Vision Validated</h4>
                          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Ready to bring this to life?</p>
                        </div>
                      </div>
                      <a 
                        href="#contact"
                        className="group relative px-8 py-4 border border-brand-primary/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all duration-500 overflow-hidden"
                      >
                        <span className="relative z-10">Consult with our experts</span>
                        <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPlanner;
