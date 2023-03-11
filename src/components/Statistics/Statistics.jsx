import PropTypes from 'prop-types';
import { List, Text, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>
        <Text>
          Good: <Value>{good}</Value>
        </Text>
      </li>
      <li>
        <Text>
          Neutral: <Value>{neutral}</Value>
        </Text>
      </li>
      <li>
        <Text>
          Bad: <Value>{bad}</Value>
        </Text>
      </li>
      <li>
        <Text>
          Total: <Value>{total}</Value>
        </Text>
      </li>
      <li>
        <Text>
          Positive feedback:
          <Value>{positivePercentage}</Value>
        </Text>
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
