import React, { useEffect, useRef, useState } from 'react';
import {
  Smartphone,
  Globe,
  Layers,
  Zap,
  Layout,
  Code,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  ShieldCheck,
  Clock,
  Cpu,
  Server,
  Database,
  Cloud
} from 'lucide-react';

// --- Utility Components ---

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

const GridPattern = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }}
  />
);

// --- Main Page Component ---

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl opacity-50 animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl opacity-50 animate-pulse-slow delay-1000 mix-blend-multiply" />
        <GridPattern />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div className="mb-12 lg:mb-0 relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 border border-blue-100 backdrop-blur-sm shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 mr-3 animate-pulse"></span>
                  <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">Top-Rated App Agency</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight">
                  Build Apps That <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-violet-600 to-blue-600 bg-[length:200%_auto] animate-gradient">Defy Expectations</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  From disruptive startups to enterprise giants, we engineer mobile experiences that users love and businesses rely on.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <button className="group px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                    Get Free Proposal
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                  <button className="px-8 py-4 rounded-2xl bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    Explore Portfolio
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="relative perspective-1000">
              {/* 3D-ish Card Stack */}
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto aspect-square">
                {/* Back Card */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-linear-to-br from-violet-100 to-indigo-50 rounded-3xl border border-violet-100 rotate-6 opacity-60 scale-90 translate-x-4 animate-float delay-1000 shadow-2xl"></div>

                {/* Middle Card */}
                <div className="absolute top-4 right-4 w-3/4 h-3/4 bg-linear-to-br from-blue-100 to-cyan-50 rounded-3xl border border-blue-100 -rotate-3 opacity-80 scale-95 animate-float delay-500 shadow-2xl"></div>

                {/* Front Main Visual */}
                <div className="absolute bottom-0 left-4 w-4/5 h-4/5 bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 animate-float flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-50/50 pointer-events-none"></div>

                  {/* Mock UI Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
                  </div>

                  {/* Mock UI Content */}
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center p-3 bg-blue-50 rounded-xl">
                      <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center text-white"><Zap size={20} /></div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-blue-200 rounded-full mb-2"></div>
                        <div className="h-2 w-16 bg-blue-100 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center p-3 bg-violet-50 rounded-xl">
                      <div className="h-10 w-10 bg-violet-500 rounded-lg flex items-center justify-center text-white"><TrendingUp size={20} /></div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-violet-200 rounded-full mb-2"></div>
                        <div className="h-2 w-16 bg-violet-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Graph */}
                  <div className="mt-8 relative h-32 w-full">
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-blue-500/10 to-transparent rounded-t-xl"></div>
                    <svg className="absolute bottom-0 left-0 right-0 w-full h-full text-blue-500" preserveAspectRatio="none">
                      <path d="M0,80 C50,80 50,20 100,20 C150,20 150,60 200,60 C250,60 250,40 350,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Project Delivered</div>
                    <div className="text-xs text-slate-500">Just now</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      <Reveal>
        <div className="relative border-y border-slate-200/60 bg-white/40 backdrop-blur-md z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {[
                { label: "Faster Delivery", value: "8 Weeks", sub: "Avg. MVP Timeline" },
                { label: "Uptime Guarantee", value: "99.99%", sub: "Enterprise Grade" },
                { label: "Expert Engineers", value: "Top 1%", sub: "Vetted Talent" },
                { label: "Downloads", value: "500K+", sub: "User Reach" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-700 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1 opacity-80">{stat.label}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3. What We Build */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 opacity-50"></div>
        <GridPattern />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
              <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">Software for Every Screen</h3>
              <p className="text-lg text-slate-600">
                We don't just build apps; we architect digital ecosystems that drive engagement and revenue.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Native iOS & Android", icon: Smartphone, desc: "Fluid, high-performance apps utilizing the latest native SDKs for maximum capability." },
              { title: "Cross-Platform", icon: Layers, desc: "One codebase, two platforms. React Native and Flutter solutions that don't compromise." },
              { title: "Enterprise Systems", icon: ShieldCheck, desc: "Secure, role-based scalable architectures for complex organizational needs." },
              { title: "On-Demand Services", icon: Zap, desc: "GPS-enabled, real-time booking and tracking solutions for the service economy." },
              { title: "MVP Development", icon: TrendingUp, desc: "Lean, focused product iterations designed to validate markets rapidly." },
              { title: "Legacy Modernization", icon: Layout, desc: "Transform outdated systems into modern, cloud-native high performers." }
            ].map((card, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <card.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">{card.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6 relative z-10">{card.desc}</p>

                  <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Development Process */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">From Concept to Launch</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">A proven agile methodology designed to mitigate risk and maximize velocity.</p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2 rounded-full overflow-hidden">
              <div className="h-full w-full bg-linear-to-r from-blue-500/20 to-violet-500/20"></div>
            </div>

            <div className="grid gap-12 lg:gap-0 lg:grid-cols-5">
              {[
                { num: "01", title: "Discovery", icon: Users },
                { num: "02", title: "Design", icon: Layout },
                { num: "03", title: "Code", icon: Code },
                { num: "04", title: "Test", icon: ShieldCheck },
                { num: "05", title: "Deploy", icon: Globe }
              ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 150} className="relative flex flex-col items-center text-center group">
                  <div className="h-20 w-20 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-200 transition-all duration-500 z-10 relative">
                    <step.icon size={28} />
                    <div className="absolute -top-2 -right-2 h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                      {step.num}
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl group-hover:bg-slate-50 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech Stack */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-950 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-950 to-transparent z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold mb-6">Powered by Modern Tech</h2>
              <p className="text-slate-400 max-w-2xl">We choose the right tool for the job, favoring scalability, maintenance, and performance.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Smartphone, title: "Frontend Engines", tags: ["Flutter", "React Native", "SwiftUI", "Jetpack Compose", "Next.js"] },
              { icon: Server, title: "Backend Systems", tags: ["Node.js", "Python FastApi", "GoLang", "Laravel"] },
              { icon: Database, title: "Data Storage", tags: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
              { icon: Cloud, title: "Cloud Infrastructure", tags: ["AWS Lambda", "Google Cloud", "Docker", "Kubernetes"] }
            ].map((stack, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 hover:border-blue-900/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <stack.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{stack.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {stack.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:text-white hover:border-slate-500 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Studies */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Proven Results</h2>
                <p className="text-slate-600">See how we've helped others succeed.</p>
              </div>
              <button className="text-blue-600 font-bold hover:translate-x-1 transition-transform inline-flex items-center">
                View All Projects <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "NeoBank Mobile App",
                category: "FinTech",
                stats: "4.8 Star Rating",
                color: "from-emerald-400 to-teal-500"
              },
              {
                title: "Telehealth Platform",
                category: "Healthcare",
                stats: "1M+ Users",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Logistics Dashboard",
                category: "SaaS",
                stats: "30% OpEx Cut",
                color: "from-orange-400 to-red-500"
              }
            ].map((study, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                  {/* Background Image / Gradient */}
                  <div className={`absolute inset-0 bg-linear-to-br ${study.color} opacity-90 group-hover:scale-105 transition-transform duration-700`}></div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{study.category}</span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{study.title}</h3>
                      <div className="text-white/80 font-medium mb-6 translate-y-2 group-hover:translate-y-0 text-sm overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Complete digital transformation including mobile apps and backend infrastructure.
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-bold">
                        <TrendingUp size={16} /> {study.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-blue-600 rounded-[2.5rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-900/30">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-indigo-600 rounded-full opacity-40 blur-3xl animate-pulse-slow delay-700"></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Partner with Engineering Excellence</h2>

                  <ul className="space-y-6">
                    {[
                      "Scalable Cloud-Native Architecture",
                      "IP Rights Fully Transferred",
                      "Agile Development Structure",
                      "Post-Launch Maintenance included"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group">
                        <div className="h-8 w-8 rounded-full bg-blue-500/50 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                          <CheckCircle size={18} />
                        </div>
                        <span className="font-semibold text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex gap-1 text-amber-300 mb-6">
                    {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                    "TechCore didn't just build an app; they transformed our entire business model. The level of detail and technical expertise is unmatched."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">JD</div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-blue-200 text-sm">CEO, FinStart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. Final CTA */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">Ready to Disrupt the Market?</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Schedule a free 30-minute technical consultation. No sales pressure, just engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Book Consultation
                <ArrowRight size={24} className="ml-3" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                View Pricing
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
};

export default AppDevelopment;