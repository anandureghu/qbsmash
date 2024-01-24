import React from "react";
import { Rock_Salt } from "next/font/google";
import "./HeaderSection.scss";

const rockSalt = Rock_Salt({ weight: "400", subsets: ["latin"] });

const HeaderSection = () => {
  return (
    <header className="dashboard__header">
      <div className="dashboard__header-logo">
        <h1 className="dashboard__header-logo--text">QBurst</h1>
      </div>
      <div className="dashboard__header-texts">
        <h1
          className={`dashboard__header-texts--title 
        ${rockSalt.className}`}
        >
          Smash 2k24
        </h1>
        <h2 className="dashboard__header-texts--subtitle">
          make a play for the badminton championship
        </h2>
        <button className="dashboard__header-texts--action">Show More</button>
      </div>
    </header>
  );
};

export default HeaderSection;
