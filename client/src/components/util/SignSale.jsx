import "../../css/home.css";
import "../../App.css";
import "../../css/tools.css";

const SignSale = () => {
  return (
    <div className="SignSale ">
      <div className="upperSaleSign ">
        <div className="upperRectangle flex-col-center">
          <p className="saleText">SALE</p>
        </div>
        <p className="smallSaleText">מבצעי סוף העונה במחירים מטורפים!</p>
      </div>
      <div className="lowerRectangle flex-col-center">
      <p className="saleLowerText">אסור
      לפספס!</p>
      </div>
    </div>
  );
};

export default SignSale;
