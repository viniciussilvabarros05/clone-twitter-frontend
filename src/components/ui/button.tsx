"use client"
import { motion } from "framer-motion"

type Props = {
  label: string;
  onClick?: () => void;
  size: 1 | 2 | 3;
};

export const Button = ({ label, onClick, size }: Props) => {
  const SizesOfButton = {
    1: "h-14 text-lg",
    2: "h-10 text-md",
    3: "h-7 text-xs",
  };
  return (
    <motion.button
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
    transition={{type: "spring", stiffness: 400, damping: 17}}
      className={`bg-white w-full flex justify-center items-center cursor-pointer text-black font-bold rounded-3xl ${SizesOfButton[size]}`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Button;
