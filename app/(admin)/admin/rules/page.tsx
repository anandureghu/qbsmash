"use client";

import React, { useEffect, useState } from "react";
import "./styles/AdminRules.scss";
import AddRule from "@/app/(admin)/admin/rules/components/AddRule";
import axios from "axios";
import { toast } from "react-toastify";
import RulesListingSection from "./sections/RulesListingSection";
import { IRule } from "@/types/rule";

const AdminRulesPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [rules, setRules] = useState<IRule[] | null>(null);

  const open = () => setOpenPopup(true);
  const close = () => setOpenPopup(false);

  const fetchRules = () => {
    axios
      .get("/api/rules")
      .then(({ data }) => {
        setRules(data);
      })
      .catch(() => {
        toast.error("failed to fetch data");
      });
  };

  useEffect(() => {
    if (openPopup === false) {
      fetchRules();
    }
  }, [openPopup]);

  return (
    <div className="rules">
      <div className="rules__action">
        <button className="rules__action-addbtn" onClick={open}>
          Add Rule
        </button>
      </div>
      <AddRule open={openPopup} close={close} />
      <div className="rules__list">
        {rules && rules.length ? (
          <RulesListingSection rules={rules} fetch={fetchRules} />
        ) : (
          <div className="rules__list-noData">no rules available</div>
        )}
      </div>
    </div>
  );
};

export default AdminRulesPage;
