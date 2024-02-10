import { connectToDB } from "@/database/mongodb";
import Rule from "@/models/rules";

export const DELETE = async (req: Request, { params }) => {
  try {
    await connectToDB();

    await Rule.findByIdAndDelete(params.id);

    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to delete rule", { status: 500 });
  }
};
