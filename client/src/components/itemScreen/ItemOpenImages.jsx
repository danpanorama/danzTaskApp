import "../../css/store.css";
import "../../App.css";
import Img1 from '../../assets/cloth1.png'
import Img2 from '../../assets/cloth3.png'
const ItemOpenImages = (props) => {
  return(
 <div className="ItemOpenImages">
    <div className="openItemImage">
       
    </div>

    <div className="clothsRowImages">
        <div className="imageCloth">
            <img src={Img1} alt="" className="img" />
        </div>
 <div className="imageCloth">
            <img src={Img1} alt="" className="img" />
        </div> <div className="imageCloth">
            <img src={Img1} alt="" className="img" />
        </div> <div className="imageCloth">
            <img src={Img2} alt="" className="img" />
        </div>
    </div>
   

 </div>

) ;
};

export default ItemOpenImages;
