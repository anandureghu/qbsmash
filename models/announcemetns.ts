import { Schema, model, models } from "mongoose";

const AnnouncementSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required."],
  },
  description: {
    type: String,
    required: [true, "description is required."],
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const Announcement =
  models.Announcement || model("Announcement", AnnouncementSchema);

export default Announcement;
