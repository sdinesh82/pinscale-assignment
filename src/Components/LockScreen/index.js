import { Component } from "react";
import "./index.css";

const givenData = [
  { Email: "jane.doe@gmail.com", Password: "janedoe@123", "User Id": 1 },
  { Email: "samsmith@gmail.com", Password: "samsmith@123", "User Id": 2 },
  { Email: "rahul@gmail.com", Password: "rahul@123", "User Id": 4 },
  { Email: "teja@gmail.com", Password: "teja@123", "User Id": 5 },
  { Email: "loki@gmail.com", Password: "loki@123", "User Id": 6 },
  { Email: "ramesh@gmail.com", Password: "ramesh@123", "User Id": 7 },
  { Email: "suresh@gmail.com", Password: "suresh@123", "User Id": 8 },
  { Email: "prem@gmail.com", Password: "prem@123", "User Id": 9 },
  { Email: "piyush@gmail.com", Password: "piyush@123", "User Id": 10 },
  { Email: "isha@gmail.com", Password: "isha@123", "User Id": 12 },
  { Email: "seema@gmail.com", Password: "seema@123", "User Id": 14 },
  { Email: "seema@123", Password: "arjun@123", "User Id": 15 },
  { Email: "radha@gmail.com", Password: "radha@123", "User Id": 16 },
  { Email: "phani@gmail.com", Password: "phani@123", "User Id": 17 },
];

class LockScreen extends Component {
  state = { userName: "", password: "", totalData: givenData };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    const details = {
      email: userName,
      password: password,
    };
    const url = "https://bursting-gelding-24.hasura.app/api/rest/get-user-id";
    var options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      },
      body: JSON.stringify(details),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  onChangeUsername = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div className="bg-container">
        <form className="bg-card-container" onSubmit={this.onSubmitForm}>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            className="input"
            onChange={this.onChangeUsername}
            value={userName}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            className="input"
            onChange={this.onChangePassword}
            value={password}
          />
          <div className="btn-div">
            <button type="submit" className="loginButton">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default LockScreen;
