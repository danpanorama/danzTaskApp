import '../../css/store.css'
import '../../App.css'

const CategorySquares = () => {
  let arr = [{name:'הכל'},{name:'בגדי גוף'},{name:'מכנסיים'},{name:'אובראולים'},{name:'טקסטיל'},]
  return (
  <div className="categorySquares">
    {arr.map((e)=>{
      return(
        <div className="categoryOneSquare">
          {e.name}
        </div>
      )
    })}



  </div>
  );
};

export default CategorySquares;
