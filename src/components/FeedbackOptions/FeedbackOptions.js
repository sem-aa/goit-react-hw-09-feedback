import React from "react";
import s from "./FeedbackOptions.module.css";

var ids = require("short-id");

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option) => (
      <button
        key={ids.generate()}
        className={s.button}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}

    <h2>Statistics</h2>
  </ul>
);

export default FeedbackOptions;
