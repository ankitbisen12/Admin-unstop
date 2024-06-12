"use client";

import React, { useState, useRef } from "react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/UI/button";
import { createAssessment } from "@/app/lib/actions";

interface Skill {
  id: number;
  skill: String;
}

interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const Form = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const currSkill = useRef<HTMLInputElement>(null);
  const questionTextRef = useRef<HTMLTextAreaElement>(null);
  const optionRefs = useRef<HTMLTextAreaElement[]>([]);
  const correctAnswerRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  let idCounter = useRef<number>(0);
  let questionIdCounter = useRef<number>(0);

  const addSkillHandler = () => {
    if (currSkill.current) {
      const arr = {
        id: ++idCounter.current,
        skill: currSkill.current.value,
      };
      setSkills((prevskill) => [...prevskill, arr]);
      currSkill.current.value = "";
    } else {
      return;
    }
  };

  const removeSkillHandler = (id: number) => {
    const arr = skills.filter((skill) => skill.id !== id);
    setSkills(arr);
  };

  const addQuestionHandler = () => {
    console.log("Add question");
    if (questionTextRef.current && correctAnswerRef.current) {
      const newQuestion = {
        id: ++questionIdCounter.current,
        questionText: questionTextRef.current.value,
        options: optionRefs.current.map((ref) => ref.value),
        correctAnswer: correctAnswerRef.current.value,
      };
      setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
      questionTextRef.current.value = "";
      optionRefs.current.forEach((ref) => (ref.value = ""));
      correctAnswerRef.current.value = "";
    }
  };

  const removeQuestionHandler = (id: number) => {
    const updatedQuestions = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form submission started");

    const formData = new FormData(event.target as HTMLFormElement);

    console.log("Form data created");

    // Add skills and questions to the form data
    formData.append("skills", JSON.stringify(skills));
    formData.append("questions", JSON.stringify(questions));

    console.log("Skills and questions appended to form data", {
      skills: JSON.stringify(skills),
      questions: JSON.stringify(questions),
    });

    try {
      console.log("inside try");
      const result = await createAssessment(formData);

      console.log("Result from createAssessment", result);

      setSkills([]);
      setQuestions([]);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error in handleSubmit", error);
    }
  };

  return (
    <>
      <form className="mt-6" onSubmit={handleSubmit} ref={formRef}>
        <div className="p-4 lg:p-6 xl:p-8">
          <div className="rounded-md">
            <div className="mb-4">
              <label
                htmlFor="testName"
                className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600"
              >
                Name of assessment
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="testName"
                    name="testName"
                    type="text"
                    step="0.01"
                    placeholder="Type Here"
                    className="peer block w-full rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600"
              >
                Description
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    step="0.01"
                    placeholder="Type Here"
                    className="peer block w-full rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="skills"
                className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600"
              >
                Skills
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="p-4 border-t border-r border-l border-b-0 rounded-tl-md rounded-tr-md">
                  {skills.length !== 0 ? (
                    <>
                      {skills.map((el) => (
                        <span
                          key={el.id}
                          className="inline-flex items-center rounded-2xl bg-logo-200 px-4 py-1 mr-1 mt-2 text-md font-medium text-cyan-800"
                        >
                          {el.skill}
                          <XMarkIcon
                            className="ml-2 h-[18px] w-[18px] cursor-pointer font-bold"
                            onClick={() => removeSkillHandler(el.id)}
                          />
                        </span>
                      ))}
                    </>
                  ) : (
                    <p className="text-md text-gray-700">No skills Added</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="skills"
                    name="skills"
                    type="text"
                    step="0.01"
                    ref={currSkill}
                    placeholder="Add Skills"
                    className="peer block w-full rounded-b-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                  />
                  <PlusCircleIcon
                    className=" absolute right-3 cursor-pointer top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-gray-500"
                    onClick={addSkillHandler}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="duration"
                className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600"
              >
                Duration of assessment
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="duration"
                    name="duration"
                    type="text"
                    step="0.01"
                    placeholder="HH:MM:SS"
                    className="peer block w-full rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 space-y-4">
              {questions.map((question) => (
                <fieldset
                  key={question.id}
                  className="border p-4 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <p className="mt-1 text-lg font-semibold text-gray-800">
                      Q: {question.questionText}
                    </p>
                    <XMarkIcon
                      className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-700 transition"
                      onClick={() => removeQuestionHandler(question.id)}
                    />
                  </div>

                  <div className="mt-4 space-y-4">
                    {question.options.map((option, index) => (
                      <div className="flex items-center gap-x-3" key={index}>
                        <span className=" border-gray-300 text-gray-900">
                          {index+1}{"."}
                        </span>
                        <label
                          htmlFor={`option-${question.id}-${index}`}
                          className="text-md font-medium text-gray-900"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            {/* <div className="mb-4">
              {questions.map((question) => (
                <fieldset key={question.id}>
                  <div className="flex justify-between">
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Q.{question.questionText}
                    </p>
                    <XMarkIcon
                      className="h-[18px] w-[18px] cursor-pointer text-red-500"
                      onClick={() => removeQuestionHandler(question.id)}
                    />
                  </div>

                  <div className="mt-6 space-y-6">
                    {question.options.map((option, index) => (
                      <div className="flex items-center gap-x-3" key={index}>
                        <span className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                          A
                        </span>
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div> */}
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/assessment"
              className="flex h-10 items-center rounded-lg bg-gray-200 px-4 py-1 text-md font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>

      <div className="p-4 lg:p-6 xl:p-8 mt-2">
        <div className="rounded-md">
          <div className="mb-4">
            <label className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600">
              Questions
            </label>
            <div className="p-4 border rounded-md">
              <div className="mb-4">
                <textarea
                  ref={questionTextRef}
                  placeholder="Enter question"
                  className="block w-full mb-2 rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                  required
                />
                <div className="mb-2">
                  {[...Array(4)].map((_, index) => (
                    <textarea
                      key={index}
                      ref={(el) => {
                        optionRefs.current[index] = el!;
                      }}
                      placeholder={`Option ${index + 1}`}
                      className="block w-full mb-2 rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                      required
                    />
                  ))}
                </div>
                <textarea
                  ref={correctAnswerRef}
                  placeholder="Correct Answer"
                  className="block w-full mb-2 rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                  required
                />
                <span
                  onClick={addQuestionHandler}
                  className="cursor-pointer flex h-10 items-center rounded-lg  px-4 text-md font-medium text-gray-700 transition-colors "
                >
                  Add Question
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
