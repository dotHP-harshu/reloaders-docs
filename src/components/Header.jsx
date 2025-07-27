import React, { useContext } from 'react'
import { LuGithub } from "react-icons/lu";
import { IoLogoNpm } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { modeContext } from '../context/ModeContext';
import { RainbowSpinner } from "@dothp/reloaders/ShapeLoaders";



function Header() {
  const {mode, setMode} = useContext(modeContext)

  const handleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
    }else{
      setMode("dark")
    }
  }
  
  return (
    <header className="bg-surface-bg-light dark:bg-surface-bg-dark flex justify-between items-center w-full px-20 max-lg:px-10 max-sm:px-6 fixed top-0 left-0 ">
      {/* Logo  */}
      <a href="/" className="logo p-4">
        <img src="/images/logo.png" alt="logo" className="w-10 h-auto" />
      </a>
      {/* Logo  */}

      {/* Links  */}
      <ul className="flex gap-8 max-lg:gap-6 max-sm:gap-4 items-center justify-center">
        <li>
          <a href="#">
            <LuGithub
              size={24}
              className="text-muted-text-dark transition-colors duration-300 hover:text-primary-color"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <IoLogoNpm
              size={24}
              className="text-muted-text-dark transition-colors duration-300 hover:text-primary-color"
            />
          </a>
        </li>
        <li onClick={handleMode}>
          {mode === "dark" ? (
            <MdDarkMode
              size={24}
              className="text-muted-text-dark transition-colors duration-300 hover:text-primary-color cursor-pointer"
            />
          ) : (
            <MdLightMode
              size={24}
              className="text-muted-text-dark transition-colors duration-300 hover:text-primary-color cursor-pointer"
            />
          )}
        </li>
      </ul>
      {/* Links  */}
    </header>
  );
}

export default Header
