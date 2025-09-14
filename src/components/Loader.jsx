// components/Loader.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [showCurve, setShowCurve] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Step 1: 2 sec tak "Loading..."
    const textTimer = setTimeout(() => setShowCurve(true), 1000);

    // Step 2: 3 sec pe pura loader hata do
    const hideTimer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: showCurve ? "-100%" : 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: showCurve ? 1 : 0, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-purple-600 overflow-hidden"
        >
          {!showCurve && (
            <h1 className="text-white text-3xl font-bold z-10">Loading...</h1>
          )}

          {showCurve && (
            <svg
              className="absolute bottom-0 w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,202.7C672,203,768,149,864,144C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
