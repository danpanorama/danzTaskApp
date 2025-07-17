

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/home.css";
import "../../App.css";
import Baby1 from "../../assets/baby1.png";
import Baby2 from "../../assets/baby1.png";
import Baby3 from "../../assets/baby1.png";
import BrownButton from "../buttons/BrownButton";

const images = [Baby1, Baby2, Baby3];

const HomeHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // מחליף כל 4 שניות

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homeHeroComponent">
      <div className="imageBackground">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`baby${currentImage + 1}`}
            className="heroImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <BrownButton
          classname={""}
          title={"קולקצית האביב החדשה"}
        />

        {/* נקודות תחתונות */}
        <div className="carouselDots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentImage === index ? "active" : ""}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

