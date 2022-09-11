import PropTypes from 'prop-types';
import {Table,TableBody,TableHead,TableRow, TableData,TableHeadItem} from './Transaction.styled'
export const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
            <TableHead>
                <TableRow>
                    <TableHeadItem>Type</TableHeadItem>
                    <TableHeadItem>Amount</TableHeadItem>
                    <TableHeadItem>Currency</TableHeadItem>
                </TableRow>
            </TableHead>

            <TableBody>
                {items.map(item => (
                    <TableRow key={item.id}>
                        <TableData>{item.type}</TableData>
                        <TableData>{item.amount}</TableData>
                        <TableData>{item.currency}</TableData>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
};