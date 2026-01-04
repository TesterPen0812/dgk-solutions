import { Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function EmergencyBanner() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-emergency text-emergency-foreground py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Clock className="w-4 h-4" />
          </motion.div>
          <span className="font-semibold text-sm">24/7 Emergency Call-Outs</span>
          <span className="hidden sm:inline mx-2">|</span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-sm"
        >
          365 Days a Year
        </motion.span>
        <span className="hidden sm:inline mx-2">|</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-sm"
        >
          Plumbing, Drainage & Tanker Services
        </motion.span>
      </div>
    </motion.div>
  );
}
