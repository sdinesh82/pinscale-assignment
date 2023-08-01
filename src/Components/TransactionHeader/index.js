import { Link } from "react-router-dom";
import "./index.css";

const TransactionHeader = () => (
  <ul className="transaction-ul">
    <Link to="/transactions">
      <li>All Transactions</li>
    </Link>
    <Link to="/transactions/debits">
      <li>Debit</li>
    </Link>
    <Link to="/transactions/credits">
      <li>Credit</li>
    </Link>
  </ul>
);

export default TransactionHeader;
