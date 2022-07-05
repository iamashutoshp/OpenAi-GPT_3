import React from "react";
import { Feature } from "../../components";
import "./features.css";

export default function Features() {
  return (
    <div className="gpt3__features_container-root">
      <div className="gpt3__features_container-root__para">
        <p className="gradient__text">
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </p>
      </div>
      <div className="gpt3__features_container-section">
        <div className="gpt3__features_container-newfeature">
          <Feature
            title="Improving end distrusts instantly"
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
        </div>
        <div className="gpt3__features_container-newfeature">
          <Feature
            title="Become the tended active"
            text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
        </div>
        <div className="gpt3__features_container-newfeature">
          <Feature
            title="Message or am nothing"
            text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
        </div>
        <div className="gpt3__features_container-newfeature">
          <Feature
            title="Really boy law county"
            text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>
    </div>
  );
}
