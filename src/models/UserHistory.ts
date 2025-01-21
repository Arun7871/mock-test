import mongoose, { Schema, Document } from "mongoose";

export interface IUserHistory extends Document {
  userId: string; // Could be a unique user identifier
  answeredQuestions: string[]; // Array of question IDs
}

const UserHistorySchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  answeredQuestions: { type: [String], default: [] },
});

export default mongoose.model<IUserHistory>("UserHistory", UserHistorySchema);
