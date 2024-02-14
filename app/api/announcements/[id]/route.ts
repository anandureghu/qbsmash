import { connectToDB } from "@/database/mongodb";
import Announcement from "@/models/announcemetns";

export const DELETE = async (req: Request, { params }) => {
  try {
    await connectToDB();

    await Announcement.findByIdAndDelete(params.id);

    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to delete announcement", { status: 500 });
  }
};
