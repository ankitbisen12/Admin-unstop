const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema(
  {
    testName: { type: String, required: true },
    description: { type: String, required: true },
    skills: [
      {
        id: {
          type: Number,
          required: true,
        },
        skill: {
          type: String,
          required: true,
        },
      },
    ],
    duration: { type: String, required: true },
    questions: [
      {
        id: {
          type: Number,
          required: true,
        },
        questionText: {
          type: String,
          required: true,
        },
        options: {
          type: [String],
          required: true,
        },
        correctAnswer: {
          type: String,
          required: true,
        },
      },
    ],
    user_ref: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Assessment =
  mongoose.models.Assessment || mongoose.model("Assessment", AssessmentSchema);

export default Assessment;

// {
//     "testName": "Web Development",
//     "purpose": "Web Development",
//     "description": "vdcddbdhhjgdj dbdvbvhgf jbvhjgdfjheee vehbhebn hbhrehvnbn",
//     "skills": [
//       { "id": 1, "skill": "JavaScript" },
//       { "id": 2, "skill": "ES6+" },
//       { "id": 3, "skill": "Node.js" }
//     ],
//     "duration": "02:00:00",
//     "questions": [
//       {
//         "id": 1,
//         "questionText": "What is the output of the following code: console.log(typeof null);",
//         "options": ["object", "null", "undefined", "string"],
//         "correctAnswer": "object"
//       },
//       {
//         "id": 2,
//         "questionText": "Which of the following is a correct way to create a new promise?",
//         "options": ["new Promise()", "Promise()", "new Promise(resolve, reject)", "new Promise((resolve, reject) => {})"],
//         "correctAnswer": "new Promise((resolve, reject) => {})"
//       }
//     ],
//     "user_ref": [
//       "60b8d295f1bf5c44d4fa3b20", // Replace with actual User ObjectIds
//       "60b8d295f1bf5c44d4fa3b21"
//     ]
//   }
