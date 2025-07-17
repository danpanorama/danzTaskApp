import "../../css/texts.css";
import "../../App.css";
import { Link } from "react-router-dom";

const GovernorsStatement = (props) => {
  return(
 <div className="governorStatement">
     <Link className="governorState "> {props.text1} </Link>
       | 
      <Link className="governorState "> {props.text2} </Link>
 </div>

) ;
};

export default GovernorsStatement;
