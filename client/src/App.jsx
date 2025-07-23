
import ErrorPopUp from "./components/errors/ErrorPopUp";
import Nav from "./components/navbar/Nav";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
    <ErrorPopUp/>
 <Nav/>
      <AppRoutes />
    </>
  );
};

export default App;
