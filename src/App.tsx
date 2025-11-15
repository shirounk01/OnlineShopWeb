import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import "./styles.css";
import { Homepage } from "./components/Homepage";

function App() {
  const location = useLocation();
  const isDefaultPage = location.pathname === "/";

  return (
    <div>
      <Header />

      {isDefaultPage && <Homepage />}

      <Outlet />
    </div>
  );
}

export default App;
