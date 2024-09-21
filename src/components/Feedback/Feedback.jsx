import css from './Feedback.module.css';

export default function Feedback({ feedback, totalFeedback }) {
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <p className={css.feedbackGood}>Good: {feedback.good}</p>
      <p className={css.feedbackNeutral}>Neutral: {feedback.neutral}</p>
      <p className={css.feedbackBad}>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p className={css.feedbackPositivePercentage}>
        Positive: {positivePercentage}%
      </p>
    </div>
  );
}
