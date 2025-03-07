import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
}
export default App;
