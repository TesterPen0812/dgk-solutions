import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { BookOnlineLink } from "@/components/BookOnlineLink";
import { CallButton } from "@/components/CallButton";

export function StickyMobileCTA() {
  const [location] = useLocation();
  const isContactPage = location === "/contact";

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-bottom shadow-lg"
        >
          <div className="flex gap-2">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CallButton size="default" className="w-full" />
            </motion.div>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOnlineLink>
                <Button variant="outline" className="w-full gap-2" data-testid="button-book-sticky">
                  <Calendar className="w-4 h-4" />
                  Book Online
                </Button>
              </BookOnlineLink>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
