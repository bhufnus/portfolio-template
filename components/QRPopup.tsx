"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const qrVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    x: 20
  },
  visible: {
    opacity: 1,
    scale: 1.05,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
      duration: 0.5,
      bounce: 0.6
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -10,
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2, type: "spring" }
  },
  float: (custom: number = 0) => ({
    y: [0, -12, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay: custom * 0.15
    }
  })
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.1 }
  }
};

const closeVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, delay: 0.2, type: "spring" }
  }
};

export default function QRPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          layoutId="qr-popup" // Smooth layout shifts if re-mounted
          className="
            fixed top-4 right-4 z-50
            backdrop-blur-md
            rounded-2xl shadow-2xl border border-pink-200/50 dark:border-pink-400/50
            p-4 pr-10 bg-white/90 dark:bg-gray-900/90
            supports-[prefers-reduced-motion]:no-animation
          "
          variants={qrVariants}
          initial="hidden"
          animate={["visible", "float"]}
          exit="exit"
          whileHover="hover"
          onClick={(e) => e.stopPropagation()} // Prevent parent clicks
        >
          {/* QR Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/QR-CODE-WEBSITE-URL.png"
              alt="QR Code to this website"
              width={140}
              height={140}
              className="bg-transparent/80 dark:bg-gray-800/50 rounded-xl shadow-md shadow-pink-500/20 mx-auto backdrop-blur-sm"
              priority
            />
          </motion.div>

          {/* Close Button */}
          <motion.button
            variants={closeVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVisible(false)}
            className="
              absolute top-2 right-2
              text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400
              p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:shadow-md shadow-sm
              transition-colors bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
              border border-gray-200/50 dark:border-gray-700/50
            "
            aria-label="Close QR popup"
          >
            <Icon
              icon="mdi:close"
              width={20}
              height={20}
              className="text-current"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
