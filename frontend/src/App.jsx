import React, { useState, useEffect } from "react";
import { fetchQuestion } from "./api";
import QuestionCard from "./components/QuestionCard";
import "./styles/App.css";

const App = () => {
  const [questionData, setQuestionData] = useState(null);

  const loadQuestion = async () => {
    const data = await fetchQuestion();
    setQuestionData(data);
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  return (
    <div className="app">
      <h1>🎲 Random Question Generator 🎲</h1>
      {questionData && questionData.question ? (
        <QuestionCard question={questionData.question} options={questionData.options} />
      ) : (
        <p>Loading question...</p>
      )}
      <button onClick={loadQuestion}>🔄 New Question</button>
    </div>
  );
};

export default App;
