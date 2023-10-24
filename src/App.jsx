import { useState } from "react";
import {AccessLink, Header, ContentControl, Footer} from "./components"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <AccessLink />
      <Header />
      <ContentControl />
      <Footer />{" "}
    </>
  );
}

export default App;
