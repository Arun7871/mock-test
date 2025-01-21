import mongoose from "mongoose";
import Question from "../models/Question";
import connectDB from "../config/db";

const seedQuestions = async () => {
  await connectDB();

  const questions = [
    {
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris",
    },
    {
      questionText: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
  ];

  try {
    await Question.insertMany(questions);
    console.log("Questions seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding questions:", error);
  }
};

seedQuestions();
