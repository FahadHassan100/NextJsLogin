import React from "react";
import TokenBtn from "./components/tokenbtn";

const Dashboard = () => {
  return (
    <div>
      <h1>All Tokens</h1>

      <div>
        <TokenBtn />
        <h3>boxes</h3>
        <h2>Checking</h2>
      </div>
    </div>
  );
};

export default Dashboard;
