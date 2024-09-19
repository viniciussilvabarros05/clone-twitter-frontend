"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Logo } from "../ui/logo";
import HomeMenu from "./home-menu";

const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between p-6 border-b-2 border-gray-900">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
      <div className="hidden lg:block text-2xl"></div>
      <div
        className="cursor-pointer lg:hidden"
        
      >
        <FontAwesomeIcon icon={faBars} className="size-6" onClick={() => setShowMenu(true)} />
        {showMenu && (
          <HomeMenu
            closeAction={() => setShowMenu(!showMenu)}
          />
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
