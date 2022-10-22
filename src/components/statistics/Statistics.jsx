import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, FeedbackText } from './Statistics.module';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  console.log(positiveFeedback);
    return (
      <FeedbackList>
        <FeedbackItem> <FeedbackText>Good: {good}</FeedbackText></FeedbackItem> 
        <FeedbackItem> <FeedbackText>Neutral: {neutral}</FeedbackText></FeedbackItem> 
        <FeedbackItem> <FeedbackText>Bad: {bad}</FeedbackText></FeedbackItem> 
        <FeedbackItem> <FeedbackText>Total: {total}</FeedbackText></FeedbackItem> 
        <FeedbackItem> <FeedbackText>
          Positive feedback: {positiveFeedback}%
        </FeedbackText></FeedbackItem> 
      </FeedbackList>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}