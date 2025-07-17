import "../../css/store.css";
import "../../App.css";
import OpenImageStore from "./OpenImageStore";
import CategorySquares from "./CategorySquares";
import LineComponent from "../util/LineComponent";
import DropDownFilter from "../filter/DropDownFilter";
import StoreCard from "./StoreCard";
import Icon from "../../assets/dropdown.svg";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const StoreComp = () => {
  return (
    <div className="storeComponent">
      <OpenImageStore />
      <CategorySquares />
      <div className="storeSmallSpace ">
        <LineComponent />
      </div>

      <div className="containerWeb">
        <div className="filterSection">
          <DropDownFilter
            classname="smallFilter "
            icon={Icon}
            text=" כל המידות"
          />{" "}
          <DropDownFilter
            classname="bigFilter marginLeft10"
            icon={Icon}
            text="כל המוצרים"
          />
        </div>

        <div className="storeGrid">
          {array.map((e) => {
            return <StoreCard />;
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreComp;
