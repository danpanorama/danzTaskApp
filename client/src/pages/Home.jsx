import { FaPlus, FaMoneyBillWave, FaTrashAlt, FaStar, FaUser, FaRobot } from "react-icons/fa";
import "../css/home.css";

const Home = () => {
  const actions = [
    { icon: <FaPlus />, label: "הוסף משימה חדשה", description: "משימה עם תאריך, שם והערות" },
    { icon: <FaMoneyBillWave />, label: "מישהו חייב לי כסף", description: "רשום סכום, תאריך ושם" },
    { icon: <FaStar />, label: "משימות בכוכבית", description: "משימות מועדפות או דחופות" },
    { icon: <FaTrashAlt />, label: "משימות שנמחקו", description: "צפה או שחזר משימות ישנות" },
    { icon: <FaUser />, label: "הפרופיל שלי", description: "ניהול פרטי משתמש" },
    { icon: <FaRobot />, label: "AI ChatBot", description: "עוזר אישי חכם שיכול לעזור במשימות" },
  ];

  return (
    <div className="homeScreen">
      <h1 className="homeTitle">ברוך הבא 👋</h1>
      <div className="actionGrid">
        {actions.map((action, index) => (
          <div key={index} className="actionCard">
            <div className="icon">{action.icon}</div>
            <h3>{action.label}</h3>
            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
