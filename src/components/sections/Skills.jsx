// src/components/sections/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Layers, 
  Server, 
  Database,
  Wrench,
  TrendingUp,
  Target,
  User
} from 'lucide-react';
import { skills, proficiencyConfig } from '../../data/portfolio';

// Icon mapping for categories
const categoryIcons = {
  "AI & Machine Learning": <BrainCircuit className="w-8 h-8 text-purple-500" />,
  "AI Specializations": <Target className="w-8 h-8 text-indigo-500" />,
  "Development & Deployment": <Layers className="w-8 h-8 text-blue-500" />,
  "Data & Backend": <Database className="w-8 h-8 text-green-500" />,
};

const ProficiencyIndicator = ({ level }) => {
  const config = proficiencyConfig[level];
  
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= config.dots ? config.color : 'bg-gray-300 dark:bg-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Passionate about AI and machine learning with hands-on experience in computer vision, 
            deep learning, and building production-ready AI applications.
          </p>
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">
            {Object.entries(proficiencyConfig).map(([level, config]) => (
              <div key={level} className="flex items-center gap-2">
                <ProficiencyIndicator level={level} />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {config.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/30">
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[category.category]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => {
                    const config = proficiencyConfig[skill.proficiency];
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        className={`flex items-center gap-4 p-4 rounded-xl ${config.bgColor} backdrop-blur-sm border ${config.borderColor} hover:shadow-lg transition-all duration-300`}
                      >
                        {/* Skill Icon */}
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110"
                              onError={(e) => { 
                                // If image fails to load, show fallback
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling.style.display = 'flex';
                              }}
                              loading="lazy"
                            />
                          ) : null}
                          {/* Fallback icon for missing images */}
                          <div 
                            className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg"
                            style={{ display: skill.icon ? 'none' : 'flex' }}
                          >
                            {skill.name.charAt(0).toUpperCase()}
                          </div>
                        </div>

                        {/* Skill Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {skill.name}
                          </h4>
                          {skill.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {skill.description}
                            </p>
                          )}
                        </div>

                        {/* Proficiency Indicator */}
                        <div className="flex flex-col items-center gap-1">
                          <ProficiencyIndicator level={skill.proficiency} />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {config.label}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">
              Continuously learning and growing as an AI developer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;