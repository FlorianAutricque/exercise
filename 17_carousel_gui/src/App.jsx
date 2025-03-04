import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [flip, setFlip] = useState(false); // Alterne à chaque changement

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) {
      setActiveIndex(prev => (prev + 1) % colors.length);
      setFlip(prev => !prev); // Inverse à chaque changement
    } else if (info.offset.x > 50) {
      setActiveIndex(prev => (prev - 1 + colors.length) % colors.length);
      setFlip(prev => !prev); // Inverse à chaque changement
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden relative">
      {colors.map((color, index) => {
        const isActive = index === activeIndex;
        const distance = index - activeIndex;

        // alternate flip up down
        const yPosition = isActive
          ? 0
          : distance < 0
          ? flip
            ? -50
            : 50 // left ; alternate
          : flip
          ? 50
          : -50; // right : alternate

        return (
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{
              scale: isActive ? 2 : 1, // zoom
              x: distance * 150,
              y: yPosition,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-24 h-24 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
}

export default App;
