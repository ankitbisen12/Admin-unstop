"use client";

import React, { useState, useRef } from "react";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PlusCircleIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "@/app/UI/button";

const customers = [
  { id: 1, value: "Ankit", name: "Ankit" },
  { id: 2, value: "Bisen", name: "Bisen" },
  { id: 4, value: "Amit", name: "Amit" },
];

interface Skill {
  id: number;
  skill: String;
}

const Form = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const currSkill = useRef<HTMLInputElement>(null);
  let idCounter = useRef<number>(0);

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

  return (
    <form className="mt-6">
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
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="purpose"
              className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600"
            >
              Purpose of the test is
            </label>
            <div className="relative">
              <select
                id="purpose"
                name="purpose"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-2 block text-md lg:text-lg xl:text-xl font-medium text-slate-600"
            >
              Description
            </label>
            <div className="relative">
              <select
                id="description"
                name="description"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-4 text-md outline-none placeholder:text-slate-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
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
                  required
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
  );
};

export default Form;
