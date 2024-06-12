"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Assessment from "@/models/Assessment";
import { AssessmentForm, Skill, Question } from "./definitions";
import User from '@/models/User';

export async function createAssessment(formData: FormData) {
  const data: { [key: string]: FormDataEntryValue } = Object.fromEntries(
    formData.entries()
  );

  console.log("Parsed form data", data);

  try {
    // Parse skills and questions from JSON strings
    const skills: Skill[] = JSON.parse(data.skills as string);
    const questions: Question[] = JSON.parse(data.questions as string);

    console.log("Parsed skills and questions", { skills, questions });

    // Create the AssessmentForm object
    const assessmentData: AssessmentForm = {
      testName: data.testName as string,
      description: data.description as string,
      skills,
      duration: data.duration as string,
      questions,
    };

    console.log("Assessment data to be created", assessmentData);

    const newAssessment = await Assessment.create(assessmentData);
  } catch (error) {
    console.error("Error in createAssessment", error);

    return {
      success: false,
      message: "Database Error: Failed to Create Assessment.",
      error,
    };
  }

  revalidatePath("/dashboard/assessment");
  redirect("/dashboard/assessment");
}

export async function updateUser(id: string, formData: FormData) {
  const { name, email } = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const data = { name, email };


  try {
    const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
    // console.log("user",updateUser);
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
  
  revalidatePath('/dashboard/admin');
  redirect('/dashboard/admin');
}

export async function deleteTest(id:string){
    try{
      const test = await Assessment.findByIdAndDelete(id);
      revalidatePath('/dashboard/assessment');

    }catch(error){
      return { message: "Database Error: Failed to Update Invoice." };
    }
}