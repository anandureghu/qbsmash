import React from "react";
import RuleListItem from "../components/RuleListItem";
import { IRule } from "@/types/rule";
import "./RulesListingSection.scss";

interface IRulesListingSectionProps {
  rules: IRule[];
  fetch: () => void;
}

const RulesListingSection: React.FC<IRulesListingSectionProps> = ({
  rules,
  fetch,
}) => {
  return (
    <>
      {rules.map((rule: IRule, i: number) => {
        return (
          <RuleListItem
            key={`rules-list-item-` + i}
            rule={rule}
            fetch={fetch}
          />
        );
      })}
    </>
  );
};

export default RulesListingSection;
