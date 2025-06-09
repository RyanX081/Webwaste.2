import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Users, Leaf } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "EcoCommerce",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1",
      results: {
        carbonReduction: "67%",
        loadTime: "2.1s faster",
        bounceRate: "35% lower",
        conversions: "28% increase"
      },
      description: "By implementing image optimization, lazy loading, and green hosting, this e-commerce platform significantly reduced their environmental impact while improving business metrics.",
      optimizations: [
        "WebP image format adoption",
        "CDN implementation",
        "Code splitting",
        "Green hosting migration"
      ]
    },
    {
      company: "GreenBlog",
      industry: "Media & Publishing",
      image: "https://images.unsplash.com/photo-1703932892707-96a68172d8ee",
      results: {
        carbonReduction: "52%",
        loadTime: "1.8s faster",
        bounceRate: "42% lower",
        conversions: "31% increase"
      },
      description: "A content-heavy blog reduced their carbon footprint through strategic content optimization and sustainable design principles.",
      optimizations: [
        "Text compression",
        "Minimal design approach",
        "Font optimization",
        "Dark mode implementation"
      ]
    },
    {
      company: "TechStartup",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1620492948575-4a24c67354ac",
      results: {
        carbonReduction: "74%",
        loadTime: "3.2s faster",
        bounceRate: "28% lower",
        conversions: "45% increase"
      },
      description: "A SaaS platform revolutionized their architecture with sustainable development practices, achieving remarkable efficiency gains.",
      optimizations: [
        "Progressive Web App",
        "Efficient algorithms",
        "Database optimization",
        "Edge computing"
      ]
    }
  ];

  const StatCard = ({ icon: Icon, value, label, color = "emerald" }) => (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
      <div className={`w-10 h-10 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-lg flex items-center justify-center`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className={`text-lg font-bold text-${color}-600`}>{value}</p>
        <p className="text-sm text-slate-600">{label}</p>
      </div>
    </div>
  );

  return (
    <section className="section bg-gradient-light relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Success <span className="highlight">Stories</span>
          </h2>
          <p className="section-subtitle">
            Real companies achieving remarkable results through sustainable web optimization
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className={`grid grid-1 lg:grid-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={study.image} 
                    alt={`${study.company} case study`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-500/20"></div>
                </div>
                
                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{study.company}</h3>
                    <p className="text-emerald-600 font-semibold text-lg">{study.industry}</p>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-2 gap-4 mb-8">
                    <StatCard 
                      icon={TrendingDown} 
                      value={study.results.carbonReduction} 
                      label="Carbon Reduction" 
                      color="emerald"
                    />
                    <StatCard 
                      icon={Clock} 
                      value={study.results.loadTime} 
                      label="Faster Load Time" 
                      color="blue"
                    />
                    <StatCard 
                      icon={Users} 
                      value={study.results.bounceRate} 
                      label="Bounce Rate Reduction" 
                      color="purple"
                    />
                    <StatCard 
                      icon={Leaf} 
                      value={study.results.conversions} 
                      label="Conversion Increase" 
                      color="green"
                    />
                  </div>
                  
                  {/* Optimizations */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Optimizations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.optimizations.map((optimization, optIndex) => (
                        <span 
                          key={optIndex}
                          className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {optimization}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-emerald text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to join these success stories?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Get your personalized optimization plan and start your journey toward a sustainable web presence.
            </p>
            <button className="btn bg-white text-emerald-600 hover:bg-emerald-50">
              Start Your Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;