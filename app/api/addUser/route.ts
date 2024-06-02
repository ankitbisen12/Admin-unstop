import { dbConnect } from "@/middleware/mongoose"
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    await dbConnect();
    // console.log(request);
    const {name,email } = await request.json();
    const newUser = await User.create({ name,email});

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding New User:", error);
    return new Response(JSON.stringify({ error: "Error adding New User" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}