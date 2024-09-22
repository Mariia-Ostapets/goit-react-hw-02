import css from './Feedback.module.css';

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p className={css.feedbackGood}>Good: {feedback.good}</p>
      <p className={css.feedbackNeutral}>Neutral: {feedback.neutral}</p>
      <p className={css.feedbackBad}>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p className={css.positiveFeedback}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
