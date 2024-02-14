import React from "react";
import AnnouncementListItem from "../../announcements/components/AnnouncementListItem";
import { IAnnouncement } from "@/types/announcement";
import "./AnnouncementsListingSection.scss";

interface IAnnouncemetnsListingSectionProps {
  announcements: IAnnouncement[];
  fetch: () => void;
}

const AnnouncemetnsListingSection: React.FC<
  IAnnouncemetnsListingSectionProps
> = ({ announcements, fetch }) => {
  return (
    <>
      {announcements.map((announcement: IAnnouncement, i: number) => {
        return (
          <AnnouncementListItem
            key={`announcements-list-item-` + i}
            announcement={announcement}
            fetch={fetch}
          />
        );
      })}
    </>
  );
};

export default AnnouncemetnsListingSection;
