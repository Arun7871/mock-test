import express from "express";
import { getMockTestQuestions, submitAnswers, getUserHistory,assignQuestions ,uploadQuestion} from "../controllers/mockTestController";

const router = express.Router();

router.get("/questions", getMockTestQuestions); // Fetch questions for the test
router.post("/submit", submitAnswers); // Submit answers
router.get("/history/:userId", getUserHistory); // Fetch user history
router.get("/assign-question",assignQuestions);
router.post("/upload-question", uploadQuestion);
export default router;
