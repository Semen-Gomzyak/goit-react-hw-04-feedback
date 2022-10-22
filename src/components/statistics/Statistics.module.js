import styled from 'styled-components';

export const FeedbackList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const FeedbackItem = styled.li`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  :first-child {
    margin-top: 0px;
  }
`;

export const FeedbackText = styled.p`
  margin: 0px;
  font-size: 20px;
  line-height: 1.3;
`;
