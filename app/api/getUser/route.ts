import { dbConnect } from "@/middleware/mongoose";
import User from "@/models/User";

export async function GET(request: Request) {
  await dbConnect();

  const user = await User.find({});

  return Response.json(user);
}

