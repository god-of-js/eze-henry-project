import TheTopNav from "components/layout/TheTopNav";
import { Outlet } from "react-router-dom";

import "./MainLayout.css";

function App() {
  return (
    <main id="root">
      <div className="page-content">
        <TheTopNav />
        <Outlet />
      </div>
    </main>
  );
}

export default App;
