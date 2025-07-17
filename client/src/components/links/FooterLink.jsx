import "../../css/texts.css";
import "../../App.css";
import { Link } from "react-router-dom";

const FooterLink = (props) => {
  return <Link to={props.path} className="footerLinks">{props.text}</Link>;
};

export default FooterLink;
