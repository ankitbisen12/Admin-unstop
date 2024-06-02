const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
  {
    submission_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    marks: { type: Number, required: true },
    name: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

SubmissionSchema.virtual("id").get(function () {
  return this._id;
});

SubmissionSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Submission =
  mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);

export default Submission;
