import React, { useState, useCallback } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = (
    (good / (good + neutral + bad)) *
    100
  ).toFixed(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = useCallback((e) => {
    const name = e.target.name;

    switch (name) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  }, []);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(options)}
        onLeaveFeedback={onLeaveFeedback}
      />

      {countTotalFeedback !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positive={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
}

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (e) => {
//     this.setState((prevState) => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = (
//       (good / (good + neutral + bad)) *
//       100
//     ).toFixed(0);

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />

//         {countTotalFeedback !== 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback}
//             positive={countPositiveFeedbackPercentage}
//           />
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </Section>
//     );
//   }
// }

// export default Feedback;
