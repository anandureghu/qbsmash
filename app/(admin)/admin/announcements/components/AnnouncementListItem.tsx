import React from "react";
import { IAnnouncement } from "@/types/announcement";
import "./AnnouncementListItem.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";

interface IAnnouncementListItemProps {
  announcement: IAnnouncement;
  fetch: () => void;
}

const AnnouncementListItem: React.FC<IAnnouncementListItemProps> = ({
  announcement,
  fetch,
}) => {
  const deleteAnnouncement = () => {
    axios
      .delete(`/api/announcements/${announcement._id}`)
      .then(({ status }) => {
        if (status === 200) {
          toast.success("Announcement Deleted successfully");
          fetch();
        }
      });
  };
  return (
    <div className="announcements__announcement">
      {announcement?.imageUrl && (
        <div
          className="announcements__announcement-img"
          style={{
            backgroundImage: `url(${announcement?.imageUrl})`,
          }}
        />
      )}
      {/* {announcement?.imageUrl && (
        <Image src={announcement?.imageUrl} alt={announcement.title} width={}/>
      )} */}
      <h2 className="announcements__announcement-title">
        {announcement.title}
      </h2>
      <h2 className="announcements__announcement-description">
        {announcement.description}
      </h2>

      <div className="announcements__announcement-actions">
        <div
          className="announcements__announcement-actions--delete"
          onClick={deleteAnnouncement}
        >
          <RiDeleteBin6Line size={20} cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementListItem;
