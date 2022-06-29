import PropTypes from 'prop-types';
import { ListItem, StatList, StatistisTitle } from '../../ui/Statistics';
import { Box } from '../../components/Box';
import { getRandomHexColor } from 'components/getRandomColor';

export const Statistics = ({ title, stats }) => {
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
          const statBackgroundColor = getRandomHexColor();
          return (
            <ListItem
              key={el.id}
              style={{ backgroundColor: statBackgroundColor }}
            >
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
