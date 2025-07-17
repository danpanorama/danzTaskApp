import '../../css/texts.css'
import '../../App.css'


const DropDownFilter = (props) => {
  return (
<div className={"filterDropdown " + props.classname}>
<p><img src={props.icon} alt="" />
  </p>

<p>{props.text}</p>

</div>
  );
};

export default DropDownFilter;
