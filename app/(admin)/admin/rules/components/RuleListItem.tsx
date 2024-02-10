import React from "react";
import { IRule } from "@/types/rule";
import "./RuleListItem.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";

interface IRuleListItemProps {
  rule: IRule;
  fetch: () => void;
}

const RuleListItem: React.FC<IRuleListItemProps> = ({ rule, fetch }) => {
  const deleteRule = () => {
    axios.delete(`/api/rules/${rule._id}`).then(({ status }) => {
      if (status === 200) {
        toast.success("Rule Deleted successfully");
        fetch();
      }
    });
  };
  return (
    <div className="rules__rule">
      <h2 className="rules__rule-title">{rule.title}</h2>
      <h2 className="rules__rule-description">{rule.description}</h2>

      <div className="rules__rule-actions">
        <div className="rules__rule-actions--delete" onClick={deleteRule}>
          <RiDeleteBin6Line size={20} cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default RuleListItem;
