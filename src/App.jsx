import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Grid from "./components/Grid";
import { ModeProvider } from "./context/ModeContext";
import PopupCard from "./components/PopupCard";
import PreLoader from "./components/PreLoader";
function App() {
  const [activeLink, setActiveLink] = useState("bar_loaders");
  const [isShowingPreloader, setIsShowingPreloader] = useState(true)

  return (
    <ModeProvider>
     {
      isShowingPreloader && <PreLoader setIsShowingPreloader={setIsShowingPreloader} />
     }
      <Header />
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Grid activeLink={activeLink} />
    </ModeProvider>
  );
}

export default App;
