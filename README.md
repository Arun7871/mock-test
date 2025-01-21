# Mock Test Feature API

Check out the postman file.
This project implements a mock test feature using Node.js, Express.js, and MongoDB. It allows users to fetch mock test questions, submit their answers, retrieve their history, and manage questions in the database.

---

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Available API Endpoints](#available-api-endpoints)
- [Sample Data Structure](#sample-data-structure)

---

## Technologies Used
- **Node.js** - Backend server
- **Express.js** - Web framework for building RESTful APIs
- **MongoDB** - NoSQL database for storing questions and user data
- **TypeScript** - Typed JavaScript for better development experience

---

## Project Setup

### Prerequisites
- Node.js installed (v14+ recommended)
- MongoDB installed locally or have access to a MongoDB Atlas instance

### Steps
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory and configure it:
   I have used my own DB to test easily and reduce the DB setup.

4. Run the project:
   ```bash
   npm start
   ```

The server will start at [http://localhost:5000](http://localhost:5000).

---

## Available API Endpoints

### 1. Fetch Questions for the Test
**Endpoint:** `GET /questions`

- Fetches a list of mock test questions.

**Response Example:**
```json
{
  "questions": [
    {
      "id": "123",
      "question": "What is 2 + 2?",
      "options": ["2", "3", "4", "5"]
    }
  ]
}
```

---

### 2. Submit Answers
**Endpoint:** `POST /submit`

- Allows users to submit their answers for evaluation.

**Request Body Example:**
```json
{
  "userId": "user123",
  "answeredQuestions": ["question1", "question2"]
}
```

**Response Example:**
```json
{
  "message": "Answers submitted successfully"
}
```

---

### 3. Fetch User History
**Endpoint:** `GET /history/:userId`

- Retrieves the mock test history of a specific user.

**Path Parameter:**
- `userId` - The ID of the user.

**Response Example:**
```json
{
  "userId": "user123",
  "answeredQuestions": ["question1", "question3"]
}
```

---

### 4. Assign Questions
**Endpoint:** `GET /assign-question`

- Assigns questions to users dynamically during runtime.

**Response Example:**
```json
{
  "message": "Questions assigned successfully",
  "assignedQuestions": [
    { "id": "101", "question": "What is JavaScript?" }
  ]
}
```

---

### 5. Upload Questions
**Endpoint:** `POST /upload-question`

- Allows the upload of new questions to the database.

**Request Body Example:**
```json
{
  "question": "What is the capital of France?",
  "options": ["Berlin", "Madrid", "Paris", "Rome"],
  "answer": "Paris"
}
```

**Response Example:**
```json
{
  "message": "Question uploaded successfully"
}
```

---

## Sample Data Structure

### MongoDB Models

#### Questions
```typescript
{
  question: string; // The question text
  options: string[]; // List of answer options
  answer: string; // Correct answer
}
```

#### User History
```typescript
{
  userId: string; // User ID
  answeredQuestions: string[]; // Array of question IDs answered by the user
}
```

---
