import '../../css/texts.css'
import '../../App.css'




const PriceText = (props) => {
  return (

 <div className="priceState">
    <p className="weight700size20">
        מחיר: 125 ש"ח
    </p>
       <p className="priceForClub">
        110 ש"ח לחברי מועדון
    </p>
 </div>

  );
};

export default PriceText;
