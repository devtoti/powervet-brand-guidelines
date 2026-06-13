import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto flex items-center justify-center rounded-full"
            style={{
              width: 48,
              height: 48,
              background: "var(--brand-dark)",
              color: "white",
              boxShadow: "0 4px 16px rgba(53,89,199,0.35)",
              border: "2px solid var(--brand-light)",
              cursor: "pointer",
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
