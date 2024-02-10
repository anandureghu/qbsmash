import { connectToDB } from "@/database/mongodb";
import Rule from "@/models/rules";
import { IRule } from "@/types/rule";

export const GET = async () => {
  try {
    await connectToDB();

    const rules = await Rule.find({});

    return new Response(JSON.stringify(rules), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all rules", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  const { title, description }: IRule = await req.json();
  try {
    await connectToDB();

    const newRule = new Rule({ title, description });
    await newRule.save();

    return new Response(JSON.stringify(newRule), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new rule", { status: 500 });
  }
};
