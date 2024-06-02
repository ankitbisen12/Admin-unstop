import { dbConnect } from "@/middleware/mongoose"
import Test from "@/models/Test";

export async function POST(request: Request) {
  try {
    await dbConnect();
    // console.log(request);
    const {name,marks } = await request.json();
    const newTest = await Test.create({ name,marks});

    return new Response(JSON.stringify(newTest), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding TestDetails:", error);
    return new Response(JSON.stringify({ error: "Error adding TestDetails" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

