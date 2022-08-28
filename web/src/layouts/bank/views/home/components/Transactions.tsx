import { Button, createStyles, Paper, Stack } from '@mantine/core';
import { TbArrowsRightLeft } from 'react-icons/tb';
import HeaderGroup from '../../../components/HeaderGroup';
import Transaction from '../../../components/Transaction';
import { TransactionProps } from '../../../../../atoms/transactions';

const mockTransactions: TransactionProps[] = [
  { type: 'inbound', amount: 3500, account: 'Billy', date: '01/01/1999' },
  { type: 'outbound', amount: 7995, account: 'Bob', date: '19/08/2022' },
  { type: 'inbound', amount: 19120, account: 'Billy', date: '31/02/2000' },
];

const useStyles = createStyles((theme) => ({
  transactions: {
    backgroundColor: theme.colors.dark[6],
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
  },

  paper: {
    height: 360,
  },

  stack: {
    height: '100%',
  },
}));

const Transactions: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Paper p="md" className={classes.paper}>
      <Stack justify="space-between" className={classes.stack}>
        <Stack>
          <HeaderGroup header="Recent Transactions" Icon={TbArrowsRightLeft} />
          <Stack>
            {mockTransactions.map((transaction, index) => (
              <Transaction {...transaction} key={`home-transaction-${index}`} />
            ))}
          </Stack>
        </Stack>
        <Button uppercase color="blue">
          See all
        </Button>
      </Stack>
    </Paper>
  );
};

export default Transactions;
