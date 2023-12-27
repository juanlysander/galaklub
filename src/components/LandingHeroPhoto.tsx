"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import yuvia from "@/../public/yuvia1.jpg";
import zee from "@/../public/zeehome.jpg";
import sinka from "@/../public/sinka.jpg";
import tiara from "@/../public/tiaraHome.jpg";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const imageArray = [zee, yuvia, sinka, tiara];

const LandingHeroPhoto = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#9cdae2] w-[420px] h-[480px] rounded-lg p-8 overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="absolute inset-0"
        >
          <Image
            alt="Cover Photo"
            src={imageArray[current]}
            fill
            quality={60}
            sizes="720px"
            style={{
              objectFit: "cover",
              filter: "brightness(105%)",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default LandingHeroPhoto;
