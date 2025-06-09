import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, CheckCircle, Users, TrendingUp } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1500);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Weekly Carbon Reports",
      description: "Track your optimization progress"
    },
    {
      icon: Gift,
      title: "Exclusive Tools",
      description: "Access to premium calculators"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join 10,000+ eco-conscious developers"
    }
  ];

  if (isSubscribed) {
    return (
      <section id="newsletter" className="section bg-gradient-emerald relative">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="card card-gradient max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to WebWaste!
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Thank you for joining the sustainable web movement. Check your email for your free toolkit!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-emerald-600 hover:bg-emerald-50">
                Download Toolkit
              </button>
              <button className="btn btn-outline">
                Explore Resources
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="section bg-gradient-emerald relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-1 lg:grid-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join the Green Web Revolution
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get exclusive tools, weekly insights, and join 10,000+ developers 
              building a more sustainable internet.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-emerald-100">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card card-gradient"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Start Your Free Assessment
              </h3>
              <p className="text-emerald-100">
                Get instant access to our carbon calculator and optimization toolkit
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-6">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input form-input-dark text-lg"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn bg-white text-emerald-600 hover:bg-emerald-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="loading border-emerald-600 border-t-emerald-600"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Get Free Toolkit & Assessment'
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-emerald-100 text-sm">
                Free forever. No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="text-emerald-100 text-xs">Subscribers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">50%</p>
                <p className="text-emerald-100 text-xs">Avg. Reduction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="text-emerald-100 text-xs">Forever</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;