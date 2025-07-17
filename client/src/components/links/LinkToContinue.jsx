import "../../css/texts.css";
import "../../App.css";
import { Link } from "react-router-dom";

const LinkToContinue = (props) => {
  return <Link className="LinkToContinue">{props.text}</Link>;
};

export default LinkToContinue;
