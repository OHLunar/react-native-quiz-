import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../services/AppStyle';

// Shuffles the questions
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const QuestionScreen = ({ question, onAnswer }) => {
  const answers = shuffleArray([...question.incorrect_answers, question.correct_answer]);

  return (
    <View style={styles.quiz_screen}>
      <Text style={styles.question_text}>{question.question}</Text>
      {answers.map((answer, index) => (
        <TouchableOpacity style={styles.question_btn} key={index} onPress={() => onAnswer(answer)}>
          <Text style={styles.answer_text}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuestionScreen;