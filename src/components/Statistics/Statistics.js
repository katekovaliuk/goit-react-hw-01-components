import PropTypes from 'prop-types';
import { StatContainer, StatsTitle, StatsList, StatsListItem, StatsLabel, Percentage } from './Satatistics.styled';



export const Statistics = ({ title, statsData }) => {
  return (
    <StatContainer>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {statsData.map(item => (
          <StatsListItem key={item.id}>
            <StatsLabel>{item.label}</StatsLabel>
            <Percentage>{item.percentage}&#37;</Percentage>
          </StatsListItem>
        ))}
      </StatsList>
    </StatContainer>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(PropTypes.exact(
        {id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,}
    ))
}