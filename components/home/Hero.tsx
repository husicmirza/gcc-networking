"use client";
import { motion } from "motion/react";
import { WorldMap } from "../ui/world-map";

export function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-7xl text-neutral-700">
          Balkan{" "}
          <span className="text-neutral-400">
            {"Connect".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <div className="font-extralight text-2xl md:text-4xl pb-12 pt-2 text-center">
          Connecting Balkan Expats Across the Middle East.
        </div>
      </motion.div>
      <div className="max-w-7xl w-full px-4">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -20.7975, lng: -60.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -20.7975, lng: -60.8919 }, // Brazil (Brasília)
              end: { lat: 41.1657, lng: 10.4515 }, // Euro
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 7.3548, lng: 51.1839 }, // Doha
            },
            {
              start: { lat: 7.3548, lng: 51.1839 }, // Doha
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 7.3548, lng: 51.1839 }, // Doha
              end: { lat: -20.2921, lng: 26.8219 }, // Africa
            },
          ]}
        />
      </div>
    </>
  );
}
