import { Component } from "react";
import SideBar from "../SideBar";
import TransactionHeader from "../TransactionHeader";
import { LuPencil } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";
import "./index.css";

class Transactions extends Component {
  state = { totalTrans: [] };
  componentDidMount = () => {
    this.getTotalTransactions();
  };

  getTotalTransactions = async () => {
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=20&&offset=0";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "4",
      },
    };
    const response = await fetch(url, options);
    const lastData = await response.json();
    console.log(lastData);
    this.setState({ totalTrans: lastData.transactions });
  };

  render() {
    const { totalTrans } = this.state;
    return (
      <div className="transactions-bg-container">
        <SideBar />
        <div className="transactions-div">
          <div className="transactions-header">
            <div className="transactions-header-1">
              <h1 className="dashboard-accounts">Transactions</h1>
              <button type="Button" className="dashboard-button">
                + Add Transaction
              </button>
            </div>
            <TransactionHeader />
          </div>
          <ul className="total-transactions-div">
            {totalTrans.map((each) => (
              <>
                <li className="accounts-last3-transactions">
                  <div className="mini-statement">
                    <img
                      src="https://res.cloudinary.com/dagct5hf8/image/upload/v1690817801/Group_328_mw0xnw.png"
                      alt="red-decrease"
                      className="inc-dec"
                    />
                    <p>{each.transaction_name}</p>
                  </div>
                  <div className="mini-statement-why">
                    <p>{each.category}</p>
                  </div>
                  <div className="date-of-transaction">
                    <p>{each.date}</p>
                  </div>
                  <div className="amount-of-transaction">
                    <p>{each.amount}</p>
                  </div>
                  <div className="last-pen-bin">
                    <LuPencil />
                    <BsTrash />
                  </div>
                </li>
                <hr />
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Transactions;
