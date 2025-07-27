import { createContext, useEffect, useState } from "react";

const modeContext = createContext(null)

const ModeProvider = ({children})=>{
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light")

    useEffect(() => {
       if (mode === "dark") {
         document.documentElement.classList.add("dark");
         localStorage.setItem("mode", "dark");
       }

       if (mode === "light") {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("mode", "light");
       }

    }, [mode])
    
   
    return (
        <modeContext.Provider value={{mode, setMode}}>{children}</modeContext.Provider>
    )
}

export {modeContext , ModeProvider}