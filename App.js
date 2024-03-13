import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import styles from "./src/services/AppStyle";

// Importing Necessary Libraries
import axios from "axios";
import { create } from "zustand";

// Importing Screens
import QuestionScreen from "./src/screens/QuestionScreen";
import ResultScreen from "./src/screens/ResultScreen";

// Store all the questions
const useStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
  answers: [],
  addAnswer: (answer) =>
    set((state) => ({ answers: [...state.answers, answer] })),
  resetAnswers: () => set({ answers: [] }),
}));

const App = () => {
  const { questions, setQuestions, answers, addAnswer, resetAnswers } =
    useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Fetch questions from the API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=20&category=18"
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  // Handling the answer and setting the question to the next question
  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    addAnswer({
      question: questions[currentQuestionIndex].question,
      answer,
      isCorrect,
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Reset the quiz
  const handleReset = () => {
    resetAnswers();
    setCurrentQuestionIndex(0);
  };

  return (
      <View style={styles.container}>
        {currentQuestionIndex < questions.length ? (
          <>
            <Text style={[styles.title ,styles.question_index]}>
              Question {currentQuestionIndex + 1}/20
            </Text>
            <QuestionScreen
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <ResultScreen onReset={handleReset} answers={answers} />
        )}
      </View>
  );
};

export default App;