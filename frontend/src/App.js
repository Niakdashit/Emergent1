import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./App.css";
import { SpinningWheel, WinnerModal } from './components';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const prizes = [
    { id: 1, text: "🎁 Cadeau", color: "#dc2626" },
    { id: 2, text: "🏆 Bonus", color: "#ffffff" },
    { id: 3, text: "💰 Prix", color: "#dc2626" },
    { id: 4, text: "🎯 Chance", color: "#ffffff" },
    { id: 5, text: "⭐ Super", color: "#dc2626" },
    { id: 6, text: "🎪 Magic", color: "#ffffff" },
    { id: 7, text: "🎊 Joie", color: "#dc2626" },
    { id: 8, text: "🌟 Étoile", color: "#ffffff" }
  ];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinner(null);
    setShowWinnerModal(false);
    
    // Simulate spin duration
    setTimeout(() => {
      const randomWinner = prizes[Math.floor(Math.random() * prizes.length)];
      setWinner(randomWinner);
      setIsSpinning(false);
      setShowWinnerModal(true);
    }, 4000);
  };

  const closeModal = () => {
    setShowWinnerModal(false);
    setWinner(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-green-400 relative overflow-hidden">
      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-10 w-24 h-16 bg-white rounded-full opacity-90 shadow-lg"></div>
        <div className="absolute top-20 left-16 w-16 h-10 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-12 left-20 w-12 h-8 bg-white rounded-full opacity-85"></div>
        
        <div className="absolute top-24 right-16 w-32 h-20 bg-white rounded-full opacity-90 shadow-lg"></div>
        <div className="absolute top-28 right-20 w-20 h-12 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-20 right-24 w-16 h-10 bg-white rounded-full opacity-85"></div>
        
        <div className="absolute top-40 left-1/3 w-28 h-18 bg-white rounded-full opacity-85 shadow-lg"></div>
        <div className="absolute top-44 left-1/3 w-18 h-11 bg-white rounded-full opacity-75"></div>
      </div>

      {/* Rolling Hills */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 300" className="w-full h-64">
          <path
            d="M0,300 Q200,180 400,200 T800,180 Q1000,160 1200,200 L1200,300 Z"
            fill="#84cc16"
            className="drop-shadow-sm"
          />
          <path
            d="M0,300 Q150,220 300,240 T600,220 Q800,200 1000,220 T1200,240 L1200,300 Z"
            fill="#65a30d"
            className="drop-shadow-sm"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
            Jouez pour gagner
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Spinning Wheel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-8"
        >
          <SpinningWheel
            prizes={prizes}
            isSpinning={isSpinning}
            onSpinComplete={(winner) => {
              setWinner(winner);
              setIsSpinning(false);
              setShowWinnerModal(true);
            }}
          />
        </motion.div>

        {/* Spin Button */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={handleSpin}
          disabled={isSpinning}
          className={`px-8 py-4 text-xl font-bold rounded-full shadow-lg transform transition-all duration-200 ${
            isSpinning
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 hover:scale-105 active:scale-95'
          }`}
          whileHover={!isSpinning ? { scale: 1.05 } : {}}
          whileTap={!isSpinning ? { scale: 0.95 } : {}}
        >
          {isSpinning ? 'En cours...' : 'TOURNER LA ROUE'}
        </motion.button>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white text-lg text-center mt-6 drop-shadow-md max-w-md"
        >
          Cliquez sur le bouton pour faire tourner la roue et découvrir votre prix !
        </motion.p>
      </div>

      {/* Winner Modal */}
      <AnimatePresence>
        {showWinnerModal && winner && (
          <WinnerModal winner={winner} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;