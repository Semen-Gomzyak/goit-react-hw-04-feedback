import React, { useState } from 'react';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import { Container, Title, Wrapper } from './Feedback.module';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleFeedbackButton(event) {
    const { name } = event.target;
    switch (name) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        throw new Error(`Unsuported action type`);
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();

    return Number(total ? ((good / total) * 100).toFixed(0) : 0);
  }

  function getFeedbackOptions() {
    const allCategory = { good, neutral, bad };
    return Object.keys(allCategory);
  }

  const total = countTotalFeedback();
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <Wrapper>
        <FeedbackButton
          options={getFeedbackOptions()}
          onLeaveFeedback={handleFeedbackButton}
        ></FeedbackButton>
      </Wrapper>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedbackButton = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();

//     return Number(total ? ((good / total) * 100).toFixed(0) : 0);
//   }

//   getFeedbackOptions() {
//     return Object.keys(this.state);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     console.log(this.countPositiveFeedbackPercentage());
//     return (
//       <Container>
//         <Title>Please leave feedback</Title>
//         <Wrapper>
//           <FeedbackButton
//             options={this.getFeedbackOptions()}
//             onLeaveFeedback={this.handleFeedbackButton}
//           ></FeedbackButton>
//         </Wrapper>

//         <Section title="Statistics">
//           {!total ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveFeedback={this.countPositiveFeedbackPercentage()}
//             >
//               {' '}
//             </Statistics>
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
