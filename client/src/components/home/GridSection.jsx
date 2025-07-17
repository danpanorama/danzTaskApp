import "../../css/home.css";
import "../../App.css";

const GridSection = () => {
  return (
    <div className="gridSection">
      <div className="gridSquare pans">
        <div className="squareTitle">
            <p className="smallText">
            מיכנסיים
            </p>
        </div>
      </div>
      <div className="gridSquare tshirt">
        <div className="squareTitle">
        <p className="smallText">
        בגדי גוף
            </p>
        </div>
      </div>
      <div className="gridSquare pans">
        <div className="squareTitle">
        <p className="smallText">
        טקסטיל
            </p>
        </div>
      </div>
      <div className="gridSquare tshirt">
        <div className="squareTitle">
        <p className="smallText">
        אובראולים
            </p>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
