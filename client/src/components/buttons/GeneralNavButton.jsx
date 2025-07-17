import '../../css/buttons.css'


const GeneralNavButton = ({classname, onClick, icon, ariaLabel, title }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"generalNavButton " + classname}
      aria-label={ariaLabel}
      title={title || ariaLabel} // אם אין title, נשתמש ב-ariaLabel
    >
     <img src={ icon} alt="" className="img" />
    </button>
  );
};

export default GeneralNavButton;
