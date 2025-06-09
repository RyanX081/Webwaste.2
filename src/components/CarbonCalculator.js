import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Leaf, AlertTriangle, CheckCircle } from 'lucide-react';

const CarbonCalculator = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [monthlyVisitors, setMonthlyVisitors] = useState('');
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateCarbon = (e) => {
    e.preventDefault();
    if (!websiteUrl || !monthlyVisitors) return;
    
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      // Mock calculation based on average data
      const visitors = parseInt(monthlyVisitors);
      const avgPageWeight = 2.2; // MB average
      const carbonPerMB = 0.5; // grams CO2 per MB
      const monthlyEmissions = visitors * avgPageWeight * carbonPerMB;
      const yearlyEmissions = monthlyEmissions * 12;
      
      setResults({
        monthlyEmissions: monthlyEmissions.toFixed(1),
        yearlyEmissions: yearlyEmissions.toFixed(1),
        treesNeeded: Math.ceil(yearlyEmissions / 22000), // 22kg CO2 per tree per year
        grade: yearlyEmissions > 50000 ? 'poor' : yearlyEmissions > 20000 ? 'average' : 'good',
        potentialSavings: (yearlyEmissions * 0.5).toFixed(1)
      });
      setIsCalculating(false);
    }, 2000);
  };

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'poor': return 'text-red-500';
      case 'average': return 'text-yellow-500';
      case 'good': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getGradeIcon = (grade) => {
    switch(grade) {
      case 'poor': return AlertTriangle;
      case 'average': return Calculator;
      case 'good': return CheckCircle;
      default: return Calculator;
    }
  };

  return (
    <section id="calculator" className="section bg-gradient-slate relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/9784242/pexels-photo-9784242.jpeg"
          alt="Green digital interfaces"
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
          <h2 className="section-title text-white">
            Carbon <span className="highlight">Calculator</span>
          </h2>
          <p className="section-subtitle text-emerald-100">
            Discover your website's environmental impact and get personalized recommendations
          </p>
        </motion.div>

        <div className="grid grid-1 lg:grid-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card card-gradient"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Website Assessment</h3>
            </div>
            
            <form onSubmit={calculateCarbon} className="space-y-6">
              <div className="form-group">
                <label className="form-label text-emerald-100">
                  Website URL
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="form-input form-input-dark"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label text-emerald-100">
                  Monthly Visitors
                </label>
                <select
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(e.target.value)}
                  className="form-input form-input-dark"
                  required
                >
                  <option value="">Select visitor range</option>
                  <option value="1000">1,000 - 5,000</option>
                  <option value="10000">5,000 - 25,000</option>
                  <option value="50000">25,000 - 100,000</option>
                  <option value="250000">100,000 - 500,000</option>
                  <option value="1000000">500,000+</option>
                </select>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!websiteUrl || !monthlyVisitors || isCalculating}
                className="w-full btn btn-primary"
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="loading"></div>
                    Analyzing...
                  </div>
                ) : (
                  'Calculate Carbon Footprint'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {results ? (
              <>
                <div className="card card-gradient">
                  <h3 className="text-2xl font-bold text-white mb-6">Your Carbon Impact</h3>
                  
                  <div className="grid grid-2 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald-400">{results.monthlyEmissions}g</p>
                      <p className="text-emerald-100 text-sm">CO₂ per month</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald-400">{results.yearlyEmissions}g</p>
                      <p className="text-emerald-100 text-sm">CO₂ per year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-6">
                    {React.createElement(getGradeIcon(results.grade), { 
                      className: `w-6 h-6 ${getGradeColor(results.grade)}` 
                    })}
                    <span className={`text-lg font-semibold ${getGradeColor(results.grade)}`}>
                      {results.grade.toUpperCase()} Rating
                    </span>
                  </div>
                  
                  <p className="text-emerald-100 text-center">
                    Equivalent to <span className="font-bold text-emerald-400">{results.treesNeeded} trees</span> needed 
                    to offset your annual emissions
                  </p>
                </div>
                
                <div className="card bg-gradient-emerald text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Optimization Potential</h3>
                  </div>
                  <p className="text-lg mb-4">
                    You could save up to <span className="font-bold">{results.potentialSavings}g CO₂</span> annually 
                    with proper optimization!
                  </p>
                  <button className="btn bg-white text-emerald-600 hover:bg-emerald-50">
                    Get Optimization Guide
                  </button>
                </div>
              </>
            ) : (
              <div className="card card-gradient text-center">
                <Calculator className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Ready to Calculate?</h3>
                <p className="text-emerald-100">
                  Enter your website details to see your environmental impact and discover optimization opportunities.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;