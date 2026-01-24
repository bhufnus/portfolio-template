"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { siteConfig } from "@/config/site";

const skillIcons = {
  core: CodeBracketIcon,
  frontend: PaintBrushIcon,
  backend: ServerIcon,
  tools: WrenchScrewdriverIcon,
};

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", key: "frontend" as const, color: "purple" },
    { title: "Backend", key: "backend" as const, color: "green" },
    { title: "Tools & DevOps", key: "tools" as const, color: "orange" },
    { title: "Current Interests", key: "core" as const, color: "blue" },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      progress: "bg-blue-600 dark:bg-blue-500",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      progress: "bg-purple-600 dark:bg-purple-500",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      progress: "bg-green-600 dark:bg-green-500",
    },
    orange: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-600 dark:text-orange-400",
      progress: "bg-orange-600 dark:bg-orange-500",
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = skillIcons[category.key as keyof typeof skillIcons];
            const skills = siteConfig.skills[category.key as keyof typeof siteConfig.skills];
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className={`p-3 rounded-lg ${colors.bg}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </motion.div>

                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <motion.span
                          className="text-gray-700 dark:text-gray-300 font-medium"
                          whileHover={{ x: 4, color: colors.text }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span
                          className="text-gray-600 dark:text-gray-400 text-sm font-semibold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                          className={`h-2.5 rounded-full ${colors.progress} relative overflow-hidden`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, repeat: Infinity, repeatDelay: 2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
