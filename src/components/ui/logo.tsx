"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
type Props = {
  size: number;
};
export const Logo = ({ size }: Props) => {
  const menuVariants = {
    hidden: {
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      transition: {
        duration: 0.5,
      },
    },
  };
  const pathVariants = {
    hidden: {
      pathLength:0
    },
    visible: {
      pathLength: 1,
      transition:{
        duration:2,
        ease:"easeInOut"
      }
    },
  };

  return (
    <Link href="/">
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 79 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
       
          d="M14.5 13.5L18.5 8.5L22 4H53.5M22 67L71 4H53.5M22 67H57.5L63.5 58.5M22 67H7L53.5 4"
          stroke="white"
          variants={pathVariants}
          stroke-width="7"
        />
      </motion.svg>
    </Link>
  );
};
