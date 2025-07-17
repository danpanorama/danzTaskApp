import { NavLink } from "react-router-dom";
import { FaHome, FaTasks, FaTrash, FaUser, FaPlus } from "react-icons/fa";
import '../../css/nav.css';
import '../../App.css';

const Nav = () => {
  return (
    <nav className="navContainer">
      <NavLink to="/" className="navLink" activeclassname="active">
        <FaHome />
        <span>דף הבית</span>
      </NavLink>
      <NavLink to="/tasks" className="navLink" activeclassname="active">
        <FaTasks />
        <span>המשימות שלי ⭐</span>
      </NavLink>
      <NavLink to="/addTasks" className="navLink addTaskButton" activeclassname="active">
        <FaPlus />
      </NavLink>
      <NavLink to="/deleted" className="navLink" activeclassname="active">
        <FaTrash />
        <span>משימות שנמחקו</span>
      </NavLink>
      <NavLink to="/profile" className="navLink" activeclassname="active">
        <FaUser />
        <span>פרופיל</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
