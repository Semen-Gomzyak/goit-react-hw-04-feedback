import React, { Component } from 'react';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import { Container, Title, Wrapper } from './Feedback.module';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackButton = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Number(total ? ((good / total) * 100).toFixed(0) : 0);
  }

  getFeedbackOptions() {
    return Object.keys(this.state);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    console.log(this.countPositiveFeedbackPercentage());
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <Wrapper>
          <FeedbackButton
            options={this.getFeedbackOptions()}
            onLeaveFeedback={this.handleFeedbackButton}
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
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            >
              {' '}
            </Statistics>
          )}
        </Section>
      </Container>
    );
  }
}
