import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolio';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const categorizedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My commitment to continuous learning and professional development.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(categorizedCerts).map(([category, certs]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-500" />
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                  >
                    <div className="flex-grow">
                      <div className="w-full h-56 mb-4 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-md bg-white dark:bg-gray-900">
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                        {cert.date}
                      </p>
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 text-sm hover:underline mt-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;