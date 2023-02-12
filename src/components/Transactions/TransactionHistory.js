import PropTypes from 'prop-types';
import { Table, TableHead, TableHeadTitle, TableBodyRow, TabNameleBodyRow } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadTitle>Type</TableHeadTitle>
          <TableHeadTitle>Amount</TableHeadTitle>
          <TableHeadTitle>Currency</TableHeadTitle>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TableBodyRow key={item.id}>
            <TabNameleBodyRow>{item.type}</TabNameleBodyRow>
            <TabNameleBodyRow>{item.amount}</TabNameleBodyRow>
            <TabNameleBodyRow>{item.currency}</TabNameleBodyRow>
          </TableBodyRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
