export default function WebDevelopment() {
  const techStack = {
    frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    backend: ['Node.js', 'Laravel', 'Python', 'Express.js', 'FastAPI'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel']
  };

  const services = [
    {
      icon: '🏢',
      title: 'Business Websites',
      points: ['Corporate websites', 'Professional portfolios', 'Brand showcases', 'Multi-page sites']
    },
    {
      icon: '💻',
      title: 'Web Apps & SaaS Platforms',
      points: ['Custom web applications', 'SaaS platforms', 'Progressive web apps', 'Real-time dashboards']
    },
    {
      icon: '📊',
      title: 'Admin Dashboards',
      points: ['Analytics dashboards', 'Content management', 'User management', 'Data visualization']
    },
    {
      icon: '🛒',
      title: 'eCommerce & Marketplaces',
      points: ['Online stores', 'Multi-vendor platforms', 'Payment integration', 'Inventory management']
    },
    {
      icon: '⚙️',
      title: 'CRM / ERP Portals',
      points: ['Customer management', 'Business processes', 'Workflow automation', 'Integration systems']
    },
    {
      icon: '🎯',
      title: 'Landing Pages & Funnels',
      points: ['High-converting pages', 'Lead generation', 'A/B testing ready', 'Marketing funnels']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Requirements analysis, competitor research, and project planning',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Wireframes, prototypes, and visual design creation',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Frontend & backend development with regular demos',
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deployment, testing, and ongoing maintenance',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign',
      problem: 'Low conversion rates and poor mobile experience',
      solution: 'Complete UI/UX overhaul with React & Next.js',
      result: '+52% Organic Traffic',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SaaS Dashboard Development',
      problem: 'Complex data needed simple visualization',
      solution: 'Custom analytics dashboard with real-time updates',
      result: '+85% User Engagement',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Corporate Website Modernization',
      problem: 'Outdated design affecting brand perception',
      solution: 'Modern responsive design with CMS integration',
      result: '+120% Lead Generation',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🏗️',
      title: 'Architecture-First Approach',
      description: 'Scalable, maintainable code architecture that grows with your business needs.'
    },
    {
      icon: '⚡',
      title: 'SEO-Ready & Fast Performance',
      description: 'Optimized for search engines with lightning-fast loading speeds and Core Web Vitals.'
    },
    {
      icon: '🔒',
      title: 'Secure Development',
      description: 'OWASP security standards, data encryption, and vulnerability assessments included.'
    },
    {
      icon: '💬',
      title: 'Transparent Communication',
      description: 'Weekly demos, progress updates, and direct access to development team.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Fixed Scope Project',
      description: 'Perfect for defined requirements',
      features: ['Fixed timeline & budget', 'Detailed project scope', '3 months support', 'Source code included'],
      cta: 'Get Quote',
      popular: false
    },
    {
      name: 'Dedicated Team',
      description: 'Flexible long-term partnership',
      features: ['Dedicated developers', 'Flexible scope changes', 'Monthly billing', 'Direct team access'],
      cta: 'Start Now',
      popular: true
    },
    {
      name: 'MVP Launch Package',
      description: 'Quick market validation',
      features: ['6-week delivery', 'Core features only', 'Basic design system', 'Launch support'],
      cta: 'Launch MVP',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does a website take to develop?',
      answer: 'Timeline depends on complexity. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during discovery phase.'
    },
    {
      question: 'Do you provide maintenance and support?',
      answer: 'Yes, we offer ongoing maintenance packages including security updates, performance monitoring, content updates, and technical support.'
    },
    {
      question: 'Which technology stack is best for my project?',
      answer: 'We recommend the stack based on your specific needs. React/Next.js for modern SPAs, Laravel for content-heavy sites, and Node.js for real-time applications.'
    },
    {
      question: 'Do you build SEO-friendly websites?',
      answer: 'Absolutely. All our websites are built with SEO best practices, including proper meta tags, structured data, fast loading speeds, and mobile optimization.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes, we specialize in website redesigns and modernization. We can work with your existing content and improve design, performance, and functionality.'
    },
    {
      question: 'How do payments work?',
      answer: 'We typically work with milestone-based payments. 30% upfront, 40% at design approval, and 30% at project completion. Custom payment terms available for enterprise clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Web Application Development
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                That Scales
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              High-performance websites, dashboards, admin panels, and portals built with modern stacks like React, Next.js, Node.js, Laravel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">&lt;6 Weeks</div>
              <div className="text-sm text-slate-600">MVP Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">99.9%</div>
              <div className="text-sm text-slate-600">Uptime Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">5+</div>
              <div className="text-sm text-slate-600">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 mb-1">2</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
          </div>
          
          {/* Client Logos */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-slate-400">Flipkart</div>
            <div className="text-2xl font-bold text-slate-400">Walmart</div>
            <div className="text-2xl font-bold text-slate-400">Reliance</div>
            <div className="text-2xl font-bold text-slate-400">Tata</div>
            <div className="text-2xl font-bold text-slate-400">Infosys</div>
          </div> */}
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Build
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From simple websites to complex enterprise applications, we deliver solutions that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-slate-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and transparent communication throughout the project.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <div className="text-sm font-semibold text-blue-600">{step.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and maintainable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm hover:bg-slate-600 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real projects. See how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Problem</h4>
                      <p className="text-slate-600 text-sm">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Solution</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                    <div className={`p-4 bg-gradient-to-r ${study.color} bg-opacity-10 rounded-lg`}>
                      <div className="font-bold text-lg text-slate-900">{study.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We don't just build websites, we create digital experiences that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible pricing options to match your project needs and budget requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 ${plan.popular ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'} shadow-lg`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about our web development services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Web Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project requirements and create a solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Free Call
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
              <span>💬</span>
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
