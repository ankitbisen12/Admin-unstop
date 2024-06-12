"use server";
import Assessment from "@/models/Assessment";
import Submission from "@/models/Submission";
import User from "@/models/User";
import { dbConnect } from "@/middleware/mongoose";

const ITEMS_PER_PAGE = 5;

export async function fetchSubmission() {
  try {
    const submissions = await Submission.find({})
      .populate("submission_user")
      .limit(10);
    return submissions;
  } catch (error) {
    console.error("Database Error:", error);
    return;
  }
}

export async function fetchLatestSubmission() {
  try {
    const latestSubmission = await Submission.find({})
      .populate("submission_user")
      .sort({ createdAt: -1 })
      .limit(5);

    // console.log("latestSubmission",latestSubmission);
    return latestSubmission;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch latest invoices.");
  }
}

export async function fetchCardData() {
  await dbConnect();
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

export async function fetchAssessmentDetails() {
  try {
    const assessment = await Assessment.find({}).populate("user_ref");
    // console.log("assessment",assessment);
    return assessment;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export const fetchUser = async () => {
  try {
    const user = await User.find({ admin: true });
    // console.log("user",user);
    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
};

export const fetchUserId = async (id: string) => {
  try {
    const user = await User.find({ _id: id });
    // console.log("FetchByID",user);
    return user[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
};

export const fetchTestPages = async (query: string) => {
  try {
    const tests = await Assessment.find({ testName: query });

    const plainTests = tests.map((test) => ({
      ...test.toObject(),
      _id: test._id.toString(),
      createdAt: test.createdAt.toISOString(),
      updatedAt: test.updatedAt.toISOString(),
      skills: test.skills,
      questions: test.questions,
    }));

    // console.log("plainTests",plainTests);

    const totalPages = Math.ceil(Number(plainTests.length / ITEMS_PER_PAGE));
    // console.log("test", Number(tests.length));
    // console.log("totalPages", totalPages);

    return { tests: plainTests, totalPages };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
};
