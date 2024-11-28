"use client";
import { motion } from "motion/react";
import { WorldMap } from "../ui/world-map";

export function WorldMapContainer() {
  return (
    <div className="pb-12 pt-12 md:pt-0 bg-white w-full">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-bold text-3xl md:text-7xl text-neutral-700">
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
        <p className="text-sm md:text-lg font-semibold py-4 text-center text-neutral-400 tracking-widest">
          Connecting Balkan Expats Across the Middle East.
        </p>
      </div>
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
            end: { lat: 25.276987, lng: 51.520008 }, // Doha
          },
          {
            start: { lat: 25.276987, lng: 51.520008 }, // Doha
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 25.276987, lng: 51.520008 }, // Doha
            end: { lat: -20.2921, lng: 26.8219 }, // Africa
          },
        ]}
      />
    </div>
  );
}
