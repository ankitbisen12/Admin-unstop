const mongoose = require("mongoose");
const { type } = require("os");

const TestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    marks: { type: Number, required: true },
  },

  {
    timestamps: true,
  }
);

TestSchema.virtual('id').get(function(){
    return this._id;
});

TestSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  });

const Test = mongoose.models.Test || mongoose.model("Test", TestSchema);

export default Test;
