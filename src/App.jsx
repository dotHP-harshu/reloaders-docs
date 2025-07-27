import React, { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Grid from "./components/Grid";
import { ModeProvider } from "./context/ModeContext";
import PopupCard from "./components/PopupCard";
function App() {
  const [activeLink, setActiveLink] = useState("bar_loaders");

  return (
    <ModeProvider>
      <Header />
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink}/>
      <Grid activeLink={activeLink}/>
    </ModeProvider>
  );
}

export default App;
