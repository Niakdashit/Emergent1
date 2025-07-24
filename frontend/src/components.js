import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Spinning Wheel Component
export const SpinningWheel = ({ prizes, isSpinning, onSpinComplete }) => {
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  useEffect(() => {
    if (isSpinning) {
      const spins = Math.floor(Math.random() * 5) + 8; // 8-12 full rotations
      const finalRotation = spins * 360 + Math.floor(Math.random() * 360);
      setRotation(prev => prev + finalRotation);
      
      // Calculate winner based on final position
      setTimeout(() => {
        const segmentAngle = 360 / prizes.length;
        const normalizedRotation = finalRotation % 360;
        const winnerIndex = Math.floor((360 - normalizedRotation + segmentAngle / 2) / segmentAngle) % prizes.length;
        onSpinComplete(prizes[winnerIndex]);
      }, 4000);
    }
  }, [isSpinning, prizes, onSpinComplete]);

  const segmentAngle = 360 / prizes.length;

  return (
    <div className="relative">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-500 drop-shadow-lg"></div>
      </div>
      
      {/* Wheel Container with LED Lights */}
      <div className="relative">
        {/* LED Lights Ring */}
        <div className="absolute -inset-4 rounded-full">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '50% 50%',
                transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-130px)`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Wheel */}
        <motion.div
          ref={wheelRef}
          className="relative w-80 h-80 rounded-full shadow-2xl bg-gradient-to-br from-yellow-300 to-yellow-600 border-8 border-yellow-500"
          animate={{ rotate: rotation }}
          transition={{ 
            duration: isSpinning ? 4 : 0,
            ease: isSpinning ? [0.17, 0.67, 0.12, 0.99] : "linear"
          }}
        >
          {/* Wheel Segments */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {prizes.map((prize, index) => {
              const startAngle = (index * segmentAngle - 90) * (Math.PI / 180);
              const endAngle = ((index + 1) * segmentAngle - 90) * (Math.PI / 180);
              const largeArcFlag = segmentAngle > 180 ? 1 : 0;
              
              const x1 = 100 + 90 * Math.cos(startAngle);
              const y1 = 100 + 90 * Math.sin(startAngle);
              const x2 = 100 + 90 * Math.cos(endAngle);
              const y2 = 100 + 90 * Math.sin(endAngle);
              
              const pathData = [
                `M 100 100`,
                `L ${x1} ${y1}`,
                `A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');

              const textAngle = (index * segmentAngle + segmentAngle / 2 - 90);
              const textRadius = 60;
              const textX = 100 + textRadius * Math.cos(textAngle * (Math.PI / 180));
              const textY = 100 + textRadius * Math.sin(textAngle * (Math.PI / 180));

              return (
                <g key={prize.id}>
                  <path
                    d={pathData}
                    fill={prize.color}
                    stroke="#fbbf24"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  <text
                    x={textX}
                    y={textY}
                    fill={prize.color === "#ffffff" ? "#dc2626" : "#ffffff"}
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                    className="drop-shadow-sm"
                  >
                    {prize.text}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-inner"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Winner Modal Component
export const WinnerModal = ({ winner, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Félicitations !
        </h2>
        
        <p className="text-gray-600 mb-4">
          Vous avez gagné :
        </p>
        
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
          {winner.text}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-200"
        >
          Continuer
        </motion.button>
        
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              initial={{ 
                opacity: 0,
                x: Math.random() * 400,
                y: Math.random() * 300
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, -100, -200],
                x: Math.random() * 100 - 50
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};