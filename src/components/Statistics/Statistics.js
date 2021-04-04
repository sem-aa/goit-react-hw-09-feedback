import React from "react";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <div>
    <div className={s.feedback}>
      <p className={s.appraisal}>Good: {good}</p>
      <p className={s.appraisal}>Neutral: {neutral}</p>
      <p className={s.appraisal}>Bad: {bad}</p>
    </div>
    <p>Total:{total}:</p>
    <p>Positive feedback:{positive}%</p>
  </div>
);

export default Statistics;
