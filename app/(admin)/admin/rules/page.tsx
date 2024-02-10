"use client";

import React, { useState } from "react";
import "./styles/AdminRules.scss";
import AddRule from "@/app/(admin)/admin/rules/components/AddRule";

const AdminRulesPage = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const open = () => setOpenPopup(true);
  const close = () => setOpenPopup(false);

  return (
    <div className="rules">
      <div className="rules__action">
        <button className="rules__action-addbtn" onClick={open}>
          Add Rule
        </button>
      </div>
      <AddRule open={openPopup} close={close} />
    </div>
  );
};

export default AdminRulesPage;
