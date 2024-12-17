import React from "react";
import "./../styles/App.css";

const QuestionCard = ({ question, options }) => {
  return (
    <div className="question-card">
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <ul>
        {options.map((option, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: option }}></li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
