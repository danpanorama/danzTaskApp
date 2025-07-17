import '../../css/buttons.css'
import Cart from '../../assets/shopcart.svg'


const CardBrownButton = ({classname, onClick, icon, ariaLabel, title }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"CardBrownButton " + classname}
      aria-label={ariaLabel}
      title={title || ariaLabel} // אם אין title, נשתמש ב-ariaLabel
    >
          <img src={Cart} alt="" className='' />
     <p className="btn-text">{title}</p>
   
    </button>
  );
};

export default CardBrownButton;
