import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGTP3,
} from "./containers";
import { CTA, Navbar, Brand } from "./components";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar /> 
        <Header style={{marginLeft: '20rem',
      marginRight: '2rem'}}/>
      </div>
      <WhatGTP3 />
      <Brand />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
