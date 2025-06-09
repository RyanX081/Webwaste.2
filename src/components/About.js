import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To reduce the internet's carbon footprint by empowering developers and businesses with sustainable web practices."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a global community of eco-conscious developers committed to creating a greener digital future."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Every optimized website contributes to a more sustainable internet, reducing emissions worldwide."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our methods have helped reduce digital carbon emissions by millions of tons across thousands of websites."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Websites Optimized" },
    { number: "2.5M", label: "Tons CO₂ Saved" },
    { number: "150+", label: "Countries Reached" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="section bg-gradient-light relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
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
            About <span className="highlight">WebWaste</span>
          </h2>
          <p className="section-subtitle">
            We're on a mission to make the internet more sustainable, one website at a time. 
            Join us in building a greener digital future.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card mb-16"
        >
          <div className="grid grid-1 lg:grid-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                The Problem We're Solving
              </h3>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  The digital world is responsible for more carbon emissions than the aviation industry. 
                  Every website visit, every byte transferred, every server request contributes to our planet's carbon footprint.
                </p>
                <p>
                  Yet most developers and businesses are unaware of their digital environmental impact. 
                  That's where WebWaste comes in.
                </p>
                <p>
                  We provide the tools, knowledge, and community support needed to build a more sustainable web 
                  without compromising on performance or user experience.
                </p>
              </div>
            </div>
            <div className="grid grid-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-gradient-emerald p-6 text-white text-center"
                >
                  <h4 className="text-2xl lg:text-3xl font-bold mb-2">{stat.number}</h4>
                  <p className="text-emerald-100 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-1 md:grid-2 lg:grid-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card border border-emerald-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-emerald rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-emerald text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Join thousands of developers and businesses already reducing their digital carbon footprint
            </p>
            <button 
              onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
              className="btn bg-white text-emerald-600 hover:bg-emerald-50"
            >
              Start Your Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;