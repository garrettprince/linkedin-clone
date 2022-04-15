import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("This just in", "Top news - 567 readers")}
      {newsArticle("Also more news", "Top news - 892 readers")}
      {newsArticle("So much news", "Crypto - 23 readers")}
      {newsArticle("Readers galore", "Code - 780 readers")}
      {newsArticle("And even more news", "Cars & auto - 455 readers")}
    </div>
  );
};

export default Widgets;