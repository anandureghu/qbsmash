"use client";
import React, { useState } from "react";
import "./AddAnnouncement.scss";
import { Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { addAnnouncementsValidationScema } from "@/validations/announcements/announcements";
import { supabase } from "@/database/supabase";

/**
 * error message showing component for a field
 */
const AddAnnouncementFiledValidationError = ({ field, touched, errors }) => {
  return touched[field] && errors[field] ? (
    <div className="announcement__addpopup-error">{errors[field]}</div>
  ) : null;
};

const AddAnnouncement = ({
  open,
  close,
  uploadedImageId,
  closeWithoutSubmit,
  setUploadedImageId,
}) => {
  const handleAddAnnouncement = async (values) => {
    if (!uploadedImageId) {
      toast.warn(
        "please wait for the upload to complete or please reupload the image after a refresh"
      );
      return;
    } else {
      const { data, error } = await supabase.storage
        .from("qsmash")
        .createSignedUrl(uploadedImageId, 60 * 60);

      if (error) {
        toast.error("signed url creation failed, please update manually");
      }

      let body = {
        title: values.title,
        description: values.description,
        imageUrl: data?.signedUrl,
      };

      axios
        .post("/api/announcements", body)
        .then(({ data, status }) => {
          if (status === 201) {
            toast.success("Announcement Added successfully");
            setUploadedImageId(null);
            close();
          } else {
            toast.warning("someting happened please try again later");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("someting happened please try again later");
        });
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const fileNameArray = file.name.split(".");
    const { data, error } = await supabase.storage
      .from("qsmash")
      .upload(
        `announcements/announcment_${Date.now()}.${
          fileNameArray[fileNameArray.length - 1]
        }`,
        file,
        {
          cacheControl: "3600",
          upsert: false,
        }
      );
    setUploadedImageId(data.path);
    toast.success("upload complete");
    if (error) {
      toast.error("something happend on uploading image");
    }
  };

  return (
    <div
      className="announcement__addpopup"
      style={{ display: open ? "flex" : "none" }}
      onClick={closeWithoutSubmit}
    >
      <Formik
        initialValues={{
          title: "",
          description: "",
          // imageUrl: uploadedImageId,
        }}
        onSubmit={handleAddAnnouncement}
        validationSchema={addAnnouncementsValidationScema}
      >
        {({ handleChange, values, resetForm, touched, errors }) => (
          <Form>
            <div
              className="announcement__addpopup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h1>Add Announcement</h1>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              <AddAnnouncementFiledValidationError
                field={"title"}
                errors={errors}
                touched={touched}
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
              <AddAnnouncementFiledValidationError
                field={"description"}
                errors={errors}
                touched={touched}
              />
              <input
                type="file"
                placeholder="Upload Image"
                name="imageUrl"
                onChange={handleImageUpload}
              />
              <AddAnnouncementFiledValidationError
                field={"imageUrl"}
                errors={errors}
                touched={touched}
              />
              <button className="announcement__addpopup-submit" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddAnnouncement;
