"use client";
import React from "react";
import "./ActionsSection.scss";
import { useRouter } from "next/navigation";

const ActionsSection = () => {
  const router = useRouter();
  return (
    <section className="dashboard__actions" id="dashboardActions">
      <div className="bg-blur-wrapper" />
      <div className="dashboard__actions-title">Have a look at the</div>
      <div className="dashboard__actions-items">
        <div
          className="dashboard__actions-items--item"
          onClick={() => router.push("/rules")}
        >
          Rules
        </div>
        <div className="dashboard__actions-items--item">Announcements</div>
        <div className="dashboard__actions-items--item">Teams</div>
        <div className="dashboard__actions-items--item">Matches</div>
      </div>
    </section>
  );
};

export default ActionsSection;
