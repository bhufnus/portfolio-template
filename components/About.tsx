"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Icon } from "@iconify/react";

const CURSOR_OFFSET = 16;
const POPOVER_CLOSE_DELAY = 120;

type ExperienceItem = (typeof siteConfig.experience)[number];
type EducationItem = (typeof siteConfig.education)[number];
type CertificateCategory = (typeof siteConfig.certificates)[number];
type CertificateItem = CertificateCategory["items"][number];

type DetailPopoverState =
  | { type: "experience"; index: number; x: number; y: number }
  | { type: "education"; index: number; x: number; y: number }
  | null;

function DetailPopover({
  state,
  onMouseEnter,
  onMouseLeave
}: {
  state: NonNullable<DetailPopoverState>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const isExperience = state.type === "experience";
  const item = isExperience
    ? siteConfig.experience[state.index]
    : siteConfig.education[state.index];
  const details = "details" in item && item.details ? item.details : null;
  const isBlue = isExperience;

  const [style, setStyle] = useState({
    left: state.x + CURSOR_OFFSET,
    top: state.y + CURSOR_OFFSET
  });

  useEffect(() => {
    const padding = 12;
    let left = state.x + CURSOR_OFFSET;
    let top = state.y + CURSOR_OFFSET;
    const popoverWidth = 320;
    const popoverHeight = 320;
    if (left + popoverWidth + padding > window.innerWidth)
      left = window.innerWidth - popoverWidth - padding;
    if (left < padding) left = padding;
    if (top + popoverHeight + padding > window.innerHeight)
      top = window.innerHeight - popoverHeight - padding;
    if (top < padding) top = padding;
    setStyle({ left, top });
  }, [state.x, state.y]);

  if (!details) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.15 }}
      className="fixed z-[100] w-[min(320px,calc(100vw-24px))] rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4"
      style={{ left: style.left, top: style.top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
        More details
      </p>
      <ul className="space-y-2 mb-4 max-h-40 overflow-y-auto">
        {details.highlights.map((highlight, i) => (
          <li
            key={i}
            className="text-sm text-gray-700 dark:text-gray-300 flex gap-2"
          >
            <span
              className={`mt-1.5 shrink-0 ${
                isBlue
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-purple-500 dark:text-purple-400"
              }`}
            >
              •
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      {details.technologies && details.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
          {details.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                isBlue
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                  : "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function ExperienceCard({
  item,
  index,
  onHoverStart,
  onHoverEnd
}: {
  item: ExperienceItem;
  index: number;
  onHoverStart: (x: number, y: number) => void;
  onHoverEnd: () => void;
}) {
  const hasDetails = "details" in item && item.details;

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      if (hasDetails) onHoverStart(e.clientX, e.clientY);
    },
    [hasDetails, onHoverStart]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 group/card"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
      <div
        className="relative bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/15"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onHoverEnd}
      >
        {/* Soft blue glow behind card on hover */}
        <div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 blur transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -inset-1 rounded-xl bg-blue-500/5 dark:bg-blue-400/5 opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"
          aria-hidden
        />

        <div className="relative flex items-start gap-4">
          {/* Content */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
              {item.company} • {item.period}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </div>

          {/* Icon container */}
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
            {item.icon ? (
              <Icon
                icon={item.icon}
                width={28}
                height={28}
                className="text-blue-600 dark:text-blue-400"
              />
            ) : (
              // Fallback icon if none is provided
              <Icon
                icon="mdi:briefcase"
                width={28}
                height={28}
                className="text-blue-600 dark:text-blue-400 opacity-50"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EducationCard({
  item,
  index,
  onHoverStart,
  onHoverEnd
}: {
  item: EducationItem;
  index: number;
  onHoverStart: (x: number, y: number) => void;
  onHoverEnd: () => void;
}) {
  const hasDetails = "details" in item && item.details;

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      if (hasDetails) onHoverStart(e.clientX, e.clientY);
    },
    [hasDetails, onHoverStart]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 border-l-2 border-purple-600 dark:border-purple-400 group/card"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full" />
      <div
        className="relative bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-400/15"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onHoverEnd}
      >
        {/* Soft purple glow behind card on hover */}
        <div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-400/10 to-purple-500/0 opacity-0 blur transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -inset-1 rounded-xl bg-purple-500/5 dark:bg-purple-400/5 opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"
          aria-hidden
        />
        <div className="relative">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            {item.degree}
          </h4>
          <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">
            {item.school} • {item.period}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CertificateCard({
  item,
  index
}: {
  item: CertificateItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 border-l-2 border-emerald-600 dark:border-emerald-400 group/card"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
      <div className="relative bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/15 overflow-hidden">
        {/* Soft emerald glow behind card on hover */}
        <div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-emerald-500/0 opacity-0 blur transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -inset-1 rounded-xl bg-emerald-500/5 dark:bg-emerald-400/5 opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"
          aria-hidden
        />
        <div className="relative flex flex-col sm:flex-row gap-4 p-6">
          <div className="relative w-full sm:w-32 h-40 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h4>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-1">
              {item.issuer} • {item.date}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [popover, setPopover] = useState<DetailPopoverState>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(
      () => setPopover(null),
      POPOVER_CLOSE_DELAY
    );
  }, [clearCloseTimeout]);

  const openExperience = useCallback(
    (x: number, y: number, index: number) => {
      clearCloseTimeout();
      setPopover({ type: "experience", index, x, y });
    },
    [clearCloseTimeout]
  );

  const openEducation = useCallback(
    (x: number, y: number, index: number) => {
      clearCloseTimeout();
      setPopover({ type: "education", index, x, y });
    },
    [clearCloseTimeout]
  );

  const handlePopoverMouseEnter = useCallback(() => {
    clearCloseTimeout();
  }, [clearCloseTimeout]);

  const handlePopoverMouseLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  useEffect(() => {
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="
    bg-gray-50 dark:bg-gray-800 
    rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60
    overflow-hidden
    hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-blue-400/15
    transition-all duration-300
  "
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Image */}
                <div className="relative group overflow-hidden">
                  <div className="relative w-full h-96 md:h-full min-h-[320px]">
                    <Image
                      src="/profile.png"
                      alt="Profile picture"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div
                    className="
          absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/20 
          opacity-0 group-hover:opacity-60 transition-opacity duration-500
        "
                  />
                </div>

                {/* Right: Text */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <p>{siteConfig.bio}</p>
                    <p>
                      Currently, I'm diving into learning topics such as Machine
                      Learning and Cybersecurity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience & Education
          </h3>

          <div className="space-y-8">
            {siteConfig.experience.map((item, index) => (
              <ExperienceCard
                key={index}
                item={item}
                index={index}
                onHoverStart={(x, y) => openExperience(x, y, index)}
                onHoverEnd={scheduleClose}
              />
            ))}

            {siteConfig.education.map((item, index) => (
              <EducationCard
                key={`edu-${index}`}
                item={item}
                index={siteConfig.experience.length + index}
                onHoverStart={(x, y) => openEducation(x, y, index)}
                onHoverEnd={scheduleClose}
              />
            ))}
          </div>
        </motion.div>

        {/* Certificates & Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certificates & Courses
          </h3>

          {siteConfig.certificates.map((category, catIndex) => (
            <div
              key={category.category}
              className={catIndex > 0 ? "mt-12" : ""}
            >
              <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-6 pl-8">
                {category.category}
              </h4>
              <div className="space-y-8">
                {category.items.map((item, index) => (
                  <CertificateCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {popover && (
          <DetailPopover
            key={popover.type + popover.index}
            state={popover}
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handlePopoverMouseLeave}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
