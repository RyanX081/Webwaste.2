import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: Globe,
      value: "4.6%",
      label: "Of global greenhouse gas emissions",
      description: "The digital sector's environmental impact"
    },
    {
      icon: TrendingUp,
      value: "8%",
      label: "Annual growth rate",
      description: "Digital carbon footprint increasing yearly"
    },
    {
      icon: Zap,
      value: "416.2 TWh",
      label: "Energy consumed by data centers globally",
      description: "Equivalent to Argentina's total consumption"
    },
    {
      icon: Users,
      value: "5.16B",
      label: "Internet users worldwide",
      description: "Each visit creates carbon emissions"
    }
  ];

  return (
    <section id="impact" className="section bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/14146609/pexels-photo-14146609.jpeg"
          alt="Green data visualization"
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
            The Digital <span className="highlight">Crisis</span>
          </h2>
          <p className="section-subtitle">
            Every website visit, every click, every scroll contributes to our planet's carbon footprint. 
            The time to act is now.
          </p>
        </motion.div>

        <div className="grid grid-1 md:grid-2 lg:grid-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card bg-gradient-light border border-emerald-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-emerald rounded-2xl mb-6 mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                {stat.value}
              </h3>
              <p className="text-emerald-600 font-semibold mb-3 text-center">
                {stat.label}
              </p>
              <p className="text-slate-600 text-sm text-center">
                {stat.description}
              </p>
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
            <h3 className="text-2xl font-bold mb-4">But there's hope...</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              By optimizing websites for efficiency, we can reduce digital carbon emissions by up to 
              <span className="font-bold text-emerald-200"> 50%</span> while improving user experience and performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;