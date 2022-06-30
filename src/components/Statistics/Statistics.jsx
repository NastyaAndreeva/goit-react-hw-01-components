import PropTypes from 'prop-types';
import { ListItem, StatList, StatistisTitle } from './StatisticStyled';
import { Box } from '../../components/Box';

export const Statistics = ({ title, stats, bgColor }) => {
  return (
    <Box
      width="500px"
      margin="0 auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginBottom="20px"
      style={{ backgroundColor: 'white' }}
      as="section"
    >
      <h2>Statistics</h2>
      {title && <StatistisTitle>{title}</StatistisTitle>}
      <StatList>
        {stats.map(el => {
          return (
            <ListItem key={el.id} bgColor={bgColor}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </ListItem>
          );
        })}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
