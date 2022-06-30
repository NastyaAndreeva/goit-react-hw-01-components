import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  TableBody,
  TableHeading,
  Table,
  TableText,
  TableHeader,
  TableRow,
} from 'components/ui/Table';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box
      width="400px"
      margin="0 auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="white"
      as="section"
    >
      <h2>Transactions History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeading>Type</TableHeading>
            <TableHeading>Amount</TableHeading>
            <TableHeading>Currency</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map(transaction => {
            return (
              <TableRow key={transaction.id}>
                <TableText>{transaction.type}</TableText>
                <TableText>{transaction.amount}</TableText>
                <TableText>{transaction.currency}</TableText>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
