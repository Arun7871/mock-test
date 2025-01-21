import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const QuestionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

export default mongoose.model<IQuestion>("Question", QuestionSchema);
