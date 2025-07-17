import '../../css/buttons.css'


const BrownButton = ({classname, onClick, icon, ariaLabel, title }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"BrownButton " + classname}
      aria-label={ariaLabel}
      title={title || ariaLabel} // אם אין title, נשתמש ב-ariaLabel
    >
     <p className="btn-text">{title}</p>
    </button>
  );
};

export default BrownButton;
