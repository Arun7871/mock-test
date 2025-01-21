import { Request, Response } from "express";
import Question from "../models/Question";
import UserHistory from "../models/UserHistory";

export const getMockTestQuestions = async (req: Request, res: Response) => {
  const { userId } = req.query; // Pass userId as a query parameter

  try {
    // Find the user's answered questions
    const userHistory = await UserHistory.findOne({ userId });
    const answeredQuestions = userHistory ? userHistory.answeredQuestions : [];

    // Fetch questions not yet answered by the user
    const questions = await Question.find({ _id: { $nin: answeredQuestions } }).limit(5);

    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching questions" });
  }
};
export const submitAnswers = async (req: Request, res: Response) => {
    const { userId, answeredQuestions } = req.body; // answeredQuestions is an array of question IDs
  
    try {
      // Find or create the user's history
      let userHistory = await UserHistory.findOne({ userId });
      if (!userHistory) {
        userHistory = new UserHistory({ userId, answeredQuestions: [] });
      }
  
      // Update answered questions
      userHistory.answeredQuestions = [
        ...new Set([...userHistory.answeredQuestions, ...answeredQuestions]),
      ];
  
      await userHistory.save();
      res.status(200).json({ message: "Answers submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error submitting answers" });
    }
};

export const getUserHistory = async (
  req: Request<{ userId: string }>,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;

    // Check if userId is provided
    if (!userId) {
      res.status(400).json({ message: "User ID is required." });
      return;
    }

    // Fetch user history from the database
    const userHistory = await UserHistory.find({ userId });

    // Respond with the user's history or an empty array
    res.status(200).json({
      success: true,
      data: userHistory.length > 0 ? userHistory : [],
    });
  } catch (error) {
    console.error("Error fetching user history:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
export const assignQuestions = async (
  req: Request<{ }>,
  res: Response
): Promise<void> => {
  try {
    const userId = 3424234234;

    // Check if userId is provided
    if (!userId) {
      res.status(400).json({ message: "User ID is required." });
      return;
    }

    // Fetch user history from the database
    const userHistory = await UserHistory.find({ userId });

    // Respond with the user's history or an empty array
    res.status(200).json({message:"Assigned unique questions to all users"});
  } catch (error) {
    console.error("Error fetching user history:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
export const uploadQuestion = async (req: Request, res: Response) => {
  const { userId, answeredQuestions } = req.body; // answeredQuestions is an array of question IDs

  try {
    // Placeholder logic that won't throw an error
    if (!userId) {
      console.log("No userId provided, skipping logic.");
    }

    if (!Array.isArray(answeredQuestions)) {
      console.log("answeredQuestions is not an array, skipping processing.");
    }

    // Simulate some operation
    console.log("Placeholder logic executed successfully.");

  } catch (error) {
    console.error("An error occurred:", error);
  }

  res.send("Uploaded successfully");
};
