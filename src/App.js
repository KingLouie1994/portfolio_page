import React from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { DarkModeProvider } from "./components/darkmode/darkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Header />
        <Introduction />
        <Projects />
        <Contact />
      </DarkModeProvider>
    </div>
  );
}

export default App;
