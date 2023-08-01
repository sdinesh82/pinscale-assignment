import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import "./index.css";

const SideBar = () => (
  <div className="Sidebar-bg-container">
    <div className="sidebar-logo">
      <img
        src="https://res.cloudinary.com/dagct5hf8/image/upload/v1690810653/Group_pfnisz.png"
        alt="Money matters"
        className="sidebar-image"
      />
      <h1 className="sidebar-heading">
        Money <span className="sidebar-heading-p">Matters</span>
      </h1>
    </div>
    <div className="sidebar-card">
      <div className="sidebar-card-icons">
        <HiHome className="sidebar-icon" />
        <Link to="/">
          <p className="sidebar-para">Dashboard</p>
        </Link>
      </div>
      <div className="sidebar-card-icons">
        <FaMoneyBillAlt className="sidebar-icon" />
        <Link to="/transactions">
          <p className="sidebar-para">Transactions</p>
        </Link>
      </div>
      <div className="sidebar-card-icons">
        <BsFillPersonFill className="sidebar-icon" />
        <p className="sidebar-para">Profile</p>
      </div>
    </div>
  </div>
);

export default SideBar;
