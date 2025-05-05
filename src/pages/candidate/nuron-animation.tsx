import React from 'react';
import { motion } from 'framer-motion';

interface NeuronGraphProps {
  count: number;
}

const center = 100;
const somaRadius = 20;

// Predefined realistic branch paths (relative coords)
const branchPaths = [
  // upper-left dendrite
  `M100,100 C90,80 60,70 40,60`,
  // upper-right dendrite
  `M100,100 C110,80 140,70 160,60`,
  // left dendrite
  `M100,100 C80,100 60,110 50,130`,
  // right dendrite
  `M100,100 C120,100 140,110 150,130`,
  // lower-left axon
  `M100,100 C90,120 80,150 90,180`,
  // lower-right axon branch
  `M100,100 C110,120 120,150 110,180`,
  // additional fine branch
  `M100,100 C105,140 120,160 130,170`,
];

const NeuronGraph: React.FC<NeuronGraphProps> = ({ count }) => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <radialGradient id="somaGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>
    </defs>

    {/* soma (cell body) with gradient */}
    <circle
      cx={center}
      cy={center}
      r={somaRadius}
      fill="url(#somaGrad)"
      stroke="#1e40af"
      strokeWidth={2}
    />

    {/* dynamic branches up to count */}
    {branchPaths.slice(0, count).map((d, i) => (
      <motion.path
        key={i}
        d={d}
        stroke="#1e40af"
        strokeWidth={2 - i * 0.1}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: i * 0.3 }}
      />
    ))}
  </svg>
);

export default NeuronGraph;
