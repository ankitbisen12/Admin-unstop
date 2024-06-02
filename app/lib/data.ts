import Submission from "@/models/Submission";
import Test from "@/models/Test";
import User from "@/models/User";

export async function fetchTestDetails() {
  try {
    const data = await Test.find({});
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestSubmission() {
  try {
    const latestSubmission = await Submission.find({})
      .populate("submission_user")
      .sort({ createdAt: -1 })
      .limit(5);
    return latestSubmission;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch latest invoices.");
  }
}

export async function fetchCardData() {
  try {
    const users = await User.find({});
    const submission = await Submission.find({});

    const noOfUsers = Number(users.length ?? "0");
    const noOfSubmission = Number(submission.length ?? "0");

    return {
      noOfUsers,
      noOfSubmission,
    };
  } catch (error) {
    console.log("Database error", error);
    throw new Error("Failed to fetch card details");
  }
}
