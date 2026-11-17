"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingSocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative mx-auto mt-4 sm:mt-0 sm:absolute sm:bottom-6 sm:right-8 z-30 flex justify-center sm:block"
    >
      <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-black/40 via-white/10 to-black/40 backdrop-blur-xl border border-[#C69A60]/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* WhatsApp Icon */}
        <motion.a
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/919822000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on WhatsApp"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#25D366]/30 to-black/60 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-md group"
        >
          <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
          </svg>
        </motion.a>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-5 bg-[#C69A60]/40" />

        {/* Facebook Icon */}
        <motion.a
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#1877F2]/30 to-black/60 border border-[#1877F2]/50 flex items-center justify-center text-[#FAF3E8] hover:bg-[#1877F2] hover:text-white transition-all duration-300 font-bold text-sm shadow-md"
        >
          f
        </motion.a>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-5 bg-[#C69A60]/40" />

        {/* LinkedIn Icon */}
        <motion.a
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#0A66C2]/30 to-black/60 border border-[#0A66C2]/50 flex items-center justify-center text-[#FAF3E8] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 font-bold text-xs shadow-md"
        >
          in
        </motion.a>

      </div>
    </motion.div>
  );
}
