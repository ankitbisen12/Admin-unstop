import { dbConnect } from "../../../middleware/mongoose";
import Test from '@/models/Test';

export async function GET(request: Request) {
    await dbConnect();
  
    const test = await Test.find({});
  
    return Response.json(test);
  }
  