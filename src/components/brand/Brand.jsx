import React from "react";
import { google, slack, dropbox, atlassian, shopify } from "../../assets";
import "./brand.css";

export default function Brand() {
  return (
    <div className="gpt3__brand__container">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}
