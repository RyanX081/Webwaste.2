import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Wrench, Users, ExternalLink, FileText } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Green Web Development Guide",
      description: "Complete handbook for building sustainable websites",
      type: "PDF Guide",
      size: "2.5 MB",
      downloadCount: "15.2k"
    },
    {
      icon: Wrench,
      title: "Carbon Measurement Toolkit",
      description: "Scripts and tools to monitor your website's emissions",
      type: "Code Package",
      size: "890 KB",
      downloadCount: "8.7k"
    },
    {
      icon: BookOpen,
      title: "Sustainable Design Checklist",
      description: "Step-by-step optimization checklist for designers",
      type: "Interactive PDF",
      size: "1.2 MB",
      downloadCount: "12.3k"
    },
    {
      icon: Users,
      title: "Team Training Materials",
      description: "Presentation slides and workshop materials",
      type: "PowerPoint Bundle",
      size: "4.1 MB",
      downloadCount: "6.9k"
    }
  ];

  const externalLinks = [
    {
      title: "Website Carbon Calculator",
      description: "Third-party tool for quick carbon assessments",
      url: "#",
      provider: "WebsiteCarbon.com"
    },
    {
      title: "Green Web Foundation",
      description: "Directory of green hosting providers",
      url: "#",
      provider: "GreenWebFoundation.org"
    },
    {
      title: "Sustainable Web Design",
      description: "Community resources and best practices",
      url: "#",
      provider: "SustainableWebDesign.org"
    },
    {
      title: "Carbon Literacy Training",
      description: "Learn about digital carbon emissions",
      url: "#",
      provider: "CarbonLiteracy.com"
    }
  ];

  const guides = [
    {
      title: "Image Optimization Mastery",
      description: "Advanced techniques for reducing image carbon footprint",
      readTime: "12 min read",
      category: "Technical"
    },
    {
      title: "Choosing Green Hosting",
      description: "Complete guide to renewable energy hosting providers",
      readTime: "8 min read",
      category: "Infrastructure"
    },
    {
      title: "Performance = Sustainability",
      description: "How Core Web Vitals impact your carbon footprint",
      readTime: "15 min read",
      category: "Performance"
    },
    {
      title: "Sustainable UX Design",
      description: "Design patterns that reduce digital energy consumption",
      readTime: "10 min read",
      category: "Design"
    }
  ];

  return (
    <section className="section bg-white relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1595865211152-eec48f9055c7"
          alt="Sustainable resources"
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
            Resource <span className="highlight">Hub</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to build a more sustainable web presence
          </p>
        </motion.div>

        {/* Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Free Downloads
          </h3>
          <div className="grid grid-1 md:grid-2 lg:grid-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card bg-gradient-light border border-emerald-100 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-emerald rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {resource.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 text-sm font-medium">
                    {resource.downloadCount} downloads
                  </span>
                  <Download className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guides and Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Latest Guides
          </h3>
          <div className="grid grid-1 md:grid-2 gap-6">
            {guides.map((guide, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card border border-slate-100 cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                    {guide.category}
                  </span>
                  <span className="text-slate-500 text-sm">{guide.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {guide.title}
                </h4>
                <p className="text-slate-600 mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Read more</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* External Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            External Resources
          </h3>
          <div className="grid grid-1 md:grid-2 gap-6">
            {externalLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card bg-gradient-emerald text-white cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {link.title}
                    </h4>
                    <p className="opacity-90 text-sm">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <p className="text-emerald-100 text-sm font-medium">
                  {link.provider}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;