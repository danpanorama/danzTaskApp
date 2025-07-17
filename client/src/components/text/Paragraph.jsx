import '../../css/texts.css'
import '../../App.css'




const Paragraph = (props) => {
  return (
<div className="containerWeb">
      <p className="paragraph">
    {props.text}
  </p>
</div>
  );
};

export default Paragraph;
