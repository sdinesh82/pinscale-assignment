import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Transactions from "./Components/Transactions";
import LockScreen from "./Components/LockScreen";
import TotalDebits from "./Components/TotalDebits";
import TotalCredits from "./Components/TotalCredits";
import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/lock" element={<LockScreen />} />
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/transactions" element={<Transactions />} />
    <Route exact path="/transactions/debits" element={<TotalDebits />} />
    <Route exact path="/transactions/credits" element={<TotalCredits />} />
  </Routes>
);

export default App;
