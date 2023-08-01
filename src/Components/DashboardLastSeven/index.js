import { Component } from "react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { group_name: "2023-07-28", debit: 701, credit: 200 },
  { group_name: "2023-07-29", debit: 501, credit: 500 },
  { group_name: "2023-07-30", debit: 250, credit: 250 },
  { group_name: "2023-08-01", debit: 6643, credit: 0 },
  { group_name: "2023-08-03", debit: 143, credit: 0 },
  { group_name: "2023-07-31", debit: 10648, credit: 0 },
];

class DashboardLastSeven extends Component {
  state = { data: [] };
  componentDidMount() {
    this.getLastSeven();
  }
  getLastSeven = async () => {
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "13",
      },
      maxRedirects: 20,
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({
      data: data.last_7_days_transactions_credit_debit_totals,
    });
    console.log(data);
  };
  render() {
    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`;
      }
      return number.toString();
    };
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5 }}>
          <XAxis
            dataKey="group_name"
            tick={{ stroke: "gray", strokeWidth: 1 }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{ stroke: "gray", strokeWidth: 0 }}
          />
          <Legend wrapperStyle={{ padding: 30 }} />
          <Bar dataKey="debit" name="Debit" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="credit" name="Credit" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default DashboardLastSeven;

/*  */
