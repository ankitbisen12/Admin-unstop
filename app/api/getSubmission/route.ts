import { dbConnect } from "@/middleware/mongoose";
import Submission from '@/models/Submission'

export async function GET(request:Request) {
       await dbConnect();

       const submission = await Submission.find({});

       return Response.json(submission);
}