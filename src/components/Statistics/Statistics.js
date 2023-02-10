import PropTypes from 'prop-types';



export const Statistics = ({ title, statsData }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul >
        {statsData.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,

}