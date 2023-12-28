"use client";
import BurgerIcon from "@/assets/BurgerIcon";
import CloseIcon from "@/assets/CloseIcon";
import { motion } from "framer-motion";
import React, { useState } from "react";

const NavbarMobileBurger = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(true);
  return (
    <motion.div
      whileTap={{ rotate: 360 }}
      transition={{ duration: 0.2 }}
      className="w-5 h-5"
      onClick={() => {
        setOpenBurger(!openBurger);
      }}
    >
      {openBurger ? <BurgerIcon /> : <CloseIcon size={20} fill="#111111" />}
    </motion.div>
  );
};

export default NavbarMobileBurger;
