import { Button } from './FeedbackButton.module';
import PropTypes from 'prop-types';

export const FeedbackButton = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <Button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
      >
        {button}
      </Button>
    );
  });
};

FeedbackButton.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
