import React from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import { DarkModeProvider } from "./components/darkmode/darkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Header />
        {/* <Introduction /> */}
      </DarkModeProvider>
    </div>
  );
}

export default App;
