import React from "react";
import Welcome from "./components/Welcome/Welcome";
import Container from "./components/Container/Container";
import { DarkModeProvider } from "./components/darkmode/darkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Welcome />
        <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;
