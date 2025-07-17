import "../../css/store.css";
import "../../App.css";
import BrownButton from "../buttons/BrownButton";
import CardBrownButton from "../buttons/CardBrownButton";
import { Link } from "react-router-dom";

const StoreCard = () => {
  return (
    <div className="StoreCard">
        <Link to={'/item'} >
      <div className="cardImage">
        <div className="heartIcon"></div>
      </div>
</Link>
      <div className="cardBody">
        <h3 className="cardHeader">חולצת משו משו</h3>
        <p className="cardInfoText">
          תיאור הפריט בקצרה עד שורות, חומר, איכות וכו..
        </p>
        <div className="price">
          <p className="cardInfoSmallText">מחיר:</p>
          <p className="cardInfoSmallText">125 ש”ח</p>
        </div>
        <p className="cardInfoSmallText">110 ש”ח לחברי מועדון</p>
      
      </div>
       <CardBrownButton title="הוספה לסל"/>
    </div>
  );
};

export default StoreCard;
