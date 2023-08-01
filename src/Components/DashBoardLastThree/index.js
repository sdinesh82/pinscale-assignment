import { Component } from "react";
import { LuPencil } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";

class DashBoardLastThree extends Component {
  state = { lastThreeTransactions: [] };
  componentDidMount = () => {
    this.getLastThree();
  };

  getLastThree = async () => {
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&&offset=0";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "1",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ lastThreeTransactions: data.transactions });
  };

  render() {
    const { lastThreeTransactions } = this.state;
    return (
      <ul className="accounts-last3-card">
        {lastThreeTransactions.map((each) => (
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
    );
  }
}

export default DashBoardLastThree;
