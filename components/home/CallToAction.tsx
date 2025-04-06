"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="w-full py-40 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-info/5 to-info/10" />

      <div className="max-w-7xl mx-auto relative px-4">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Be Part of a Balkan Expat Network
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto pb-6">
            Connect with fellow expats, share experiences, and unlock
            opportunities. Whether you&apos;re networking, learning, or growing
            your business, our community is here to support your journey.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/login"
              className="bg-info-foreground border border-info text-info px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Join Our Community
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
