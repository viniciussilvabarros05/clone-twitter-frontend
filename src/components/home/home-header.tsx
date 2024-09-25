"use client";

import { useState } from "react";
import { Logo } from "../ui/logo";
import { motion } from "framer-motion";
import HomeMenu from "./home-menu";

const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const Path = (props: any) => (
    <motion.span className="absolute h-[3px] w-6 bg-white" {...props} />
  );

  return (
    <>
      <motion.header
        className="flex justify-between p-6 border-b-2 bg-black border-gray-900 sticky top-0 w-full z-10"
        animate={showMenu ? "open" : "closed"}
      >
        <div className="lg:hidden">
          <Logo size={24} />
        </div>
        <div className="hidden lg:block text-2xl"></div>
        <motion.button
          className="cursor-pointer lg:hidden relative h-4 w-6"
          onClick={() => setShowMenu((show) => !show)}
        >
          <Path
            style={{
              top: "0%",
              rotate: 0,
            }}
            variants={{
              open: { rotate: "-45deg", top: "50%" },
              closed: { rotate: "0deg", top: "0%" },
            }}
            transition={{ duration: 0.5, type: "spring" }}
          />
          <Path
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            transition={{ duration: 0.5, type: "spring" }}
          />
          <Path
            style={{
              top: "100%",
              rotate: 0,
            }}
            variants={{
              open: { rotate: "45deg", top: "50%" },
              closed: { rotate: "0deg", top: "100%" },
            }}
            transition={{ duration: 0.5, type: "spring" }}
          />
        </motion.button>
      </motion.header>
      <motion.div
        className="w-full h-full mt-[10%] bg-black fixed right-0 top-0 z-10 rounded-r-none"
        animate={showMenu ? "open" : "closed"}
        style={{
          width: "50px",
          height: "50px",
          borderBottomLeftRadius: "100px",
          opacity: 0,
        }}
        variants={{
          open: { opacity: 1, width:"100%", height:"100%", top:0, left:0 },
          closed: {
            width: "50px",
            height: "50px",
            borderBottomLeftRadius: "100px",
            opacity: 0,
          },
        }}
      >
        <motion.div
          animate={showMenu ? "open" : "closed"}
          style={{ opacity: 0 }}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          className="w-full h-full"
        >
          <HomeMenu closeAction={() => setShowMenu(!showMenu)} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeHeader;
