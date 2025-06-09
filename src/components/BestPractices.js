import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Image, Code, Server, Smartphone, Zap } from 'lucide-react';

const BestPractices = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const practices = [
    {
      icon: Image,
      title: "Optimize Images",
      description: "Compress images, use modern formats (WebP, AVIF), and implement lazy loading",
      impact: "Up to 40% size reduction",
      tips: [
        "Use WebP format for 25-30% smaller file sizes",
        "Implement responsive images with srcset",
        "Enable lazy loading for below-the-fold images",
        "Compress images without quality loss"
      ]
    },
    {
      icon: Code,
      title: "Minimize Code",
      description: "Remove unused CSS/JS, enable compression, and optimize bundle sizes",
      impact: "30-50% faster load times",
      tips: [
        "Remove unused CSS and JavaScript",
        "Enable Gzip/Brotli compression",
        "Use code splitting and tree shaking",
        "Minimize HTTP requests"
      ]
    },
    {
      icon: Server,
      title: "Green Hosting",
      description: "Choose renewable energy-powered hosting providers",
      impact: "Carbon neutral hosting",
      tips: [
        "Select providers using renewable energy",
        "Use CDNs to reduce server distance",
        "Enable server-side caching",
        "Choose efficient server locations"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Design for mobile devices to reduce data transfer",
      impact: "50% less data usage",
      tips: [
        "Start with mobile design patterns",
        "Progressive enhancement approach",
        "Optimize touch interactions",
        "Reduce mobile-specific assets"
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improve Core Web Vitals and reduce processing power",
      impact: "Faster, more efficient sites",
      tips: [
        "Optimize Largest Contentful Paint (LCP)",
        "Reduce Cumulative Layout Shift (CLS)",
        "Minimize First Input Delay (FID)",
        "Use efficient animations"
      ]
    }
  ];

  const toggleCheck = (index) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  return (
    <section id="practices" className="section bg-white relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1593079323074-f1d77349c998"
          alt="Sustainable web development"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Sustainable <span className="highlight">Practices</span>
          </h2>
          <p className="section-subtitle">
            Proven strategies to reduce your website's carbon footprint without compromising user experience
          </p>
        </motion.div>

        <div className="space-y-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-gradient-light border border-emerald-100"
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-emerald rounded-2xl flex items-center justify-center">
                    <practice.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 sm:mb-0">
                      {practice.title}
                    </h3>
                    <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {practice.impact}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-6">
                    {practice.description}
                  </p>
                  
                  <div className="grid grid-1 md:grid-2 gap-3">
                    {practice.tips.map((tip, tipIndex) => (
                      <motion.div
                        key={tipIndex}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-emerald-100 cursor-pointer"
                        onClick={() => toggleCheck(`${index}-${tipIndex}`)}
                      >
                        <CheckCircle 
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-200 ${
                            checkedItems.has(`${index}-${tipIndex}`) 
                              ? 'text-emerald-500' 
                              : 'text-slate-300'
                          }`} 
                        />
                        <span className={`text-sm transition-colors duration-200 ${
                          checkedItems.has(`${index}-${tipIndex}`) 
                            ? 'text-emerald-800 font-medium' 
                            : 'text-slate-600'
                        }`}>
                          {tip}
                        </span>
                      </motion.div>
                    ))}
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
            <h3 className="text-2xl font-bold mb-4">Ready to optimize?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Download our comprehensive optimization checklist and start reducing your carbon footprint today.
            </p>
            <button className="btn bg-white text-emerald-600 hover:bg-emerald-50">
              Download Checklist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestPractices;