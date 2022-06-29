import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  TransactionBody,
  TransactionHeading,
  TransactionTable,
  TransactionText,
  TransationHeader,
  TransactionRow,
} from 'ui/TransactionsTable';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box
      width="400px"
      margin="0 auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ backgroundColor: 'white' }}
      as="section"
    >
      <h2>Transactions History</h2>
      <TransactionTable>
        <TransationHeader>
          <TransactionRow>
            <TransactionHeading>Type</TransactionHeading>
            <TransactionHeading>Amount</TransactionHeading>
            <TransactionHeading>Currency</TransactionHeading>
          </TransactionRow>
        </TransationHeader>
        <TransactionBody>
          {transactions.map(transaction => {
            return (
              <TransactionRow key={transaction.id}>
                <TransactionText>{transaction.type}</TransactionText>
                <TransactionText>{transaction.amount}</TransactionText>
                <TransactionText>{transaction.currency}</TransactionText>
              </TransactionRow>
            );
          })}
        </TransactionBody>
      </TransactionTable>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
