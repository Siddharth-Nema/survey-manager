import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function SidebarMenu() {
  return (
    <div className="SidebarMenu">
      <Link className="SidebarMenu-Links btn" to="/dashboard">
        <FaIcons.FaHome /> <span>Home</span>
      </Link>
      <Link className="SidebarMenu-Links btn" to="/dashboard/profile">
        <FaIcons.FaUser /> <span>Profile</span>
      </Link>
      <Link className="SidebarMenu-Links btn" to="/dashboard/settings">
        <FaIcons.FaCog /> <span>Settings</span>
      </Link>
      <Link className="SidebarMenu-Links btn" to="/survey-console">
        <FaIcons.FaChartLine /> <span>Manage Surveys</span>
      </Link>
    </div>
  );
}

export default SidebarMenu;
