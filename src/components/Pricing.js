import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: Star,
      description: "Perfect for individual developers and small projects",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Basic carbon footprint assessment",
        "Optimization recommendations",
        "Community support",
        "Monthly sustainability tips",
        "Basic reporting dashboard"
      ],
      buttonText: "Get Started Free",
      popular: false,
      color: "emerald"
    },
    {
      name: "Professional",
      icon: Zap,
      description: "Ideal for agencies and growing businesses",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Advanced carbon analytics",
        "Real-time monitoring",
        "Custom optimization plans",
        "Priority support",
        "White-label reporting",
        "API access",
        "Team collaboration tools"
      ],
      buttonText: "Start Professional",
      popular: true,
      color: "green"
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large organizations with complex needs",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "Training & workshops",
        "Carbon offsetting programs",
        "Custom development"
      ],
      buttonText: "Contact Sales",
      popular: false,
      color: "slate"
    }
  ];

  const getPrice = (plan) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return price === 0 ? 'Free' : `$${price}`;
  };

  const getPeriod = () => isAnnual ? '/year' : '/month';

  return (
    <section id="pricing" className="section bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(45deg, #10b981 25%, transparent 25%), linear-gradient(-45deg, #10b981 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #10b981 75%), linear-gradient(-45deg, transparent 75%, #10b981 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
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
            Simple <span className="highlight">Pricing</span>
          </h2>
          <p className="section-subtitle mb-8">
            Choose the perfect plan for your sustainability journey. Start free and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-emerald-600' : 'text-slate-600'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md absolute top-1"
                animate={{ x: isAnnual ? 36 : 4 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-emerald-600' : 'text-slate-600'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium ml-2"
              >
                Save 17%
              </motion.span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-1 md:grid-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative card overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-emerald-500 ring-4 ring-emerald-100' 
                  : 'border border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-emerald text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                </div>
                
                <p className="text-slate-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-slate-900">
                      {getPrice(plan)}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-slate-600">{getPeriod()}</span>
                    )}
                  </div>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-slate-500 mt-1">
                      ${Math.round(plan.annualPrice / 12)}/month billed annually
                    </p>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn mb-8 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-1 md:grid-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "Is the Starter plan really free forever?",
                answer: "Yes! Our Starter plan includes basic carbon assessment and optimization recommendations at no cost. Perfect for individual developers getting started with sustainable web practices."
              },
              {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Absolutely. You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle."
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Yes, we work with large organizations to create custom solutions that meet their specific sustainability goals and technical requirements."
              },
              {
                question: "What kind of support do you provide?",
                answer: "All paid plans include email support. Professional and Enterprise plans get priority support, and Enterprise customers get a dedicated account manager."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;