const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

const Question = mongoose.models.Question || mongoose.model("Question",QuestionSchema);


export default Question;

