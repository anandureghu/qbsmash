"use client";

import React from "react";
import "./Sidebar.scss";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const items = [
    { label: "Dashboard", path: "/admin" },
    { label: "Rules", path: "/admin/rules" },
    { label: "Players", path: "/admin/players" },
    { label: "Teams", path: "/admin/teams" },
    { label: "Matches", path: "/admin/matches" },
  ];

  return (
    <div className="sidebar">
      {items.map((item, i) => {
        return (
          <div
            key={"adminPage-sidebar-item-" + i}
            className={`sidebar__item ${
              pathName === item.path ? "active" : ""
            }`}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
