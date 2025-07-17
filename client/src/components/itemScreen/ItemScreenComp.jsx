import "../../css/store.css";
import "../../App.css";
import ItemOpenImages from "./ItemOpenImages";
import BoldItemHeader from "../headers/BoldItemHeader";
import Paragraph from "../text/Paragraph";
import ItemParagraph from "../text/ItemParagraph";
import PriceText from "../text/PriceText";
import ColorChange from "./ColorChange";
import SizeChange from "./SizeChange";
import { Link } from "react-router-dom";

const ItemScreenComp = (props) => {
  return (
    <div className="ItemScreenComp">
      <div className="containerWeb drtl">
        <ItemOpenImages />

        <BoldItemHeader
          title={"שם המוצר בכמה מילים עד משפט קצר משהו כמו 12 מילים "}
        />

        <ItemParagraph
          text={
            "תיאור המוצר בכמה מילים עד משפט קצר בשתי שורות, בכמה מילים עד משפט קצר בשתי שורות"
          }
        />

       <div className="space10px">
         <PriceText />
       </div>

       <ColorChange/>
       <SizeChange/>
       <p className="boldSmallText">המידה שרצית אזלה מהמלאי?  </p>
       <p className="regularSmallText"> 
       
          לא נורא, אפשר לקבל עדכון ברגע שיחזור למלאי  </p>
{/* 
 <span>
        <Link>אשמח לקבל עדכון</Link>
        </span>  */}



      </div>
    </div>
  );
};

export default ItemScreenComp;
