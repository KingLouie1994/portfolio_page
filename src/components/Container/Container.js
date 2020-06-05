import React from "react";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Container = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
};

export default Container;
