import { dbConnect } from "@/middleware/mongoose";
import Submission from "@/models/Submission";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newSubmission = await Submission.create(data);

    return new Response(JSON.stringify(newSubmission), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding New Submission:", error);
    return new Response(
      JSON.stringify({ error: "Error adding New Submission" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
