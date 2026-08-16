"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { globalReach } from "@/data/content";

const geoUrl = "/features.json";

// Coordinates for the major nodes based on the content destinations
const markers = [
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "UK", coordinates: [-3.4360, 55.3781] },
  { name: "GERMANY", coordinates: [10.4515, 51.1657] },
  { name: "FRANCE", coordinates: [2.2137, 46.2276] },
  { name: "AUSTRALIA", coordinates: [133.7751, -25.2744] },
  { name: "JAPAN", coordinates: [138.2529, 36.2048] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "CANADA", coordinates: [-106.3468, 56.1304] },
];

export function GlobalReach() {
  return (
    <section className="py-24 md:py-40 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none whitespace-pre-line text-white uppercase mb-6">
            {globalReach.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 md:text-lg font-light leading-relaxed">
            Operating a seamless supply chain across multiple continents. Delivering premium apparel to the most demanding markets in the world.
          </p>
        </motion.div>

        {/* 2D Interactive World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-[1600px] relative z-0 mb-20 md:mb-32 px-4"
        >
          <ComposableMap
            projectionConfig={{
              scale: 200,
              center: [0, 20]
            }}
            width={1200}
            height={550}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a1a1a"
                    stroke="#333333"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#2a2a2a", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <motion.circle
                  initial={{ r: 0 }}
                  whileInView={{ r: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5 + Math.random() * 0.5,
                  }}
                  fill="#00e5ff"
                  className="cursor-pointer hover:fill-white transition-colors"
                />
                <circle r={12} fill="#00e5ff" opacity={0.2} className="animate-ping" />
              </Marker>
            ))}
          </ComposableMap>
        </motion.div>

        {/* Destination Labels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 w-full max-w-6xl mx-auto relative z-10 border-t border-white/10 pt-12">
          {globalReach.destinations.map((dest, index) => (
            <motion.div
              key={dest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-2 group py-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#00e5ff] group-hover:shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-300" />
              <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors duration-300">
                {dest}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
