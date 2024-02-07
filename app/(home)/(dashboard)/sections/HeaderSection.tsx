"use client";

import React from "react";
import { Rock_Salt } from "next/font/google";
import "./HeaderSection.scss";
import Link from "next/link";

const rockSalt = Rock_Salt({ weight: "400", subsets: ["latin"] });

const HeaderSection = () => {
  return (
    <header className="dashboard__header">
      <div className="dashboard__header-texts">
        <h1 className={`dashboard__header-texts--title ${rockSalt.className}`}>
          <span>Smash</span> <span>2k24</span>
        </h1>
        <h2 className="dashboard__header-texts--subtitle">
          QB Koratty Internal Badminton Championship
        </h2>
        <Link href={"#dashboardActions"} scroll={true}>
          <button className="dashboard__header-texts--action">Explore</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
