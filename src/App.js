import React from "react";
import {
  Blog,
  Feature,
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
      <Brand />
      <WhatGTP3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
