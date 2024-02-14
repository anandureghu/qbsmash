import { connectToDB } from "@/database/mongodb";
import Announcement from "@/models/announcemetns";
import { IAnnouncement } from "@/types/announcement";
import { Rule } from "postcss";

export const GET = async () => {
  try {
    await connectToDB();

    const announcements = await Announcement.find({});

    return new Response(JSON.stringify(announcements), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all announcements", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  const { title, description, imageUrl }: IAnnouncement = await req.json();
  try {
    await connectToDB();

    const newAnnouncement = new Announcement({ title, description, imageUrl });
    await newAnnouncement.save();

    return new Response(JSON.stringify(newAnnouncement), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new announcement", { status: 500 });
  }
};
