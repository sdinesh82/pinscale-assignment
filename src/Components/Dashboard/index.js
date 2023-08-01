import { Component } from "react";
import SideBar from "../SideBar";
import DashBoardLastThree from "../DashBoardLastThree";
import DashboardLastSeven from "../DashboardLastSeven";
import "./index.css";

class Dashboard extends Component {
  state = { debitSum: "", creditSum: "" };

  componentDidMount() {
    this.getTotalDetails();
  }

  getTotalDetails = async () => {
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals";
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
    this.setState({
      debitSum: lastData.totals_credit_debit_transactions[0].sum,
      creditSum: lastData.totals_credit_debit_transactions[1].sum,
    });
  };

  render() {
    const { debitSum, creditSum } = this.state;
    return (
      <div className="dashboard-bg-container">
        <SideBar />
        <div className="dashboard-second-card">
          <div className="dashboard-header">
            <h1 className="dashboard-accounts">Accounts</h1>
            <button type="Button" className="dashboard-button">
              + Add Transaction
            </button>
          </div>
          <div className="accounts-two-cards">
            <div className="accounts-first-card">
              <div>
                <h1 className="accounts-credit-head">{creditSum}</h1>
                <p className="accounts-credit-para">Credit</p>
              </div>
              <img
                src="https://res.cloudinary.com/dagct5hf8/image/upload/v1690815359/Group_1_aegyxo.png"
                alt="account-credit-im"
                className="accounts-credit-image"
              />
            </div>
            <div className="accounts-first-card">
              <div>
                <h1 className="accounts-debit-header">{debitSum}</h1>
                <p className="accounts-debit-para">Debit</p>
              </div>
              <img
                src="https://res.cloudinary.com/dagct5hf8/image/upload/v1690815703/Group_2_sttqis.png"
                alt="account-credit-im"
                className="accounts-credit-image"
              />
            </div>
          </div>
          <h1 className="accounts-last-head">Last Transaction</h1>
          <DashBoardLastThree />
          <h1 className="accounts-last-head">Debit and Credit Overview</h1>
          <DashboardLastSeven />
        </div>
      </div>
    );
  }
}

export default Dashboard;
