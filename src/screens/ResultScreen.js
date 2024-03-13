import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../services/AppStyle";

const ResultScreen = ({ onReset, answers }) => {
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const didPass = correctAnswers >= 15;

  return (
    <>
      <View>
        {didPass ? (
          <Text style={[styles.title, styles.passed_result]}>You Passed!</Text>
        ) : (
          <Text style={[styles.title, styles.failed_result]}>You Failed</Text>
        )}
        <View style={styles.result_screen}>
          <Text style={styles.result_text}>
            You answered {correctAnswers} out of 20 questions correctly.
          </Text>
          <TouchableOpacity style={styles.restart_btn} onPress={onReset}>
            <Text style={styles.text}>Start a new game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ResultScreen;
