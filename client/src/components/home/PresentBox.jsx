import "../../css/home.css";
import "../../App.css";
import BackgroundHeader from "../headers/BackgroundHeader";
import BrownButton from "../buttons/BrownButton";

const PresentBox = () => {
  return (
    <div className="PresentBox ">
      <BackgroundHeader
        title={"מצטרפים אל מועדון הלקוחות ומקבלים הנחות ומתנות"}
      />

      <div className="BackgroundPresentImage">
        <BrownButton classname={"transformY"} title={"אני רוצה מתנה!"} />
      </div>
    </div>
  );
};

export default PresentBox;
