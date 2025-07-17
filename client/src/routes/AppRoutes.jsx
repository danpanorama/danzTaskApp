import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import StoreScreen from "../pages/StoreScreen";
import ItemScreen from "../pages/ItemScreen";


const AppRoutes = () => {
  return (
 <div className="navRoutes">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<StoreScreen />} />
 <Route path="/item" element={<ItemScreen />} />

    </Routes>
 </div>
  );
};

export default AppRoutes;
