import { Schema, model, models } from "mongoose";

const RuleSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required."],
  },
  description: {
    type: String,
    required: [true, "description is required."],
  },
});

const Rule = models.Rule || model("Rule", RuleSchema);

export default Rule;
