"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AnnouncementsListingSection from "./sections/AnnouncementsListingSection";
import { IAnnouncement } from "@/types/announcement";
import AddAnnouncement from "./components/AddAnnouncement";
import "./styles/AdminAnnouncementsPage.scss";
import { supabase } from "@/database/supabase";

const AdminAnnouncementsPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [announcements, setAnnouncements] = useState<IAnnouncement[] | null>(
    null
  );
  const [uploadedImageId, setUploadedImageId] = useState(null);

  const open = () => setOpenPopup(true);
  const close = () => setOpenPopup(false);

  const closeWithoutSubmit = async () => {
    setOpenPopup(false);
    if (uploadedImageId) {
      const { data, error } = await supabase.storage
        .from("qsmash")
        .remove([uploadedImageId]);
      console.log(data, error);
    }
    setUploadedImageId(null);
  };

  const fetchAnnouncements = () => {
    axios
      .get("/api/announcements")
      .then(({ data }) => {
        setAnnouncements(data);
      })
      .catch(() => {
        toast.error("failed to fetch data");
      });
  };

  useEffect(() => {
    if (openPopup === false) {
      fetchAnnouncements();
    }
  }, [openPopup]);

  return (
    <div className="announcements">
      <div className="announcements__action">
        <button className="announcements__action-addbtn" onClick={open}>
          Add Announcement
        </button>
      </div>
      <AddAnnouncement
        open={openPopup}
        close={close}
        closeWithoutSubmit={closeWithoutSubmit}
        uploadedImageId={uploadedImageId}
        setUploadedImageId={setUploadedImageId}
      />
      <div className="announcements__list">
        {announcements && announcements.length ? (
          <AnnouncementsListingSection
            announcements={announcements}
            fetch={fetchAnnouncements}
          />
        ) : (
          <div className="announcements__list-noData">
            no announcements available
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncementsPage;
