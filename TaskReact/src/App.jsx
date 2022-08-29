//React
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CustomNav from "./components/utils/CustomNav";
import CustomToast from "./components/utils/CustomToast";
import { Auth0Provider } from "@auth0/auth0-react";

import GlobalProvider, { GlobalContext } from "./contexts/GlobalContext";
import About from "./Pages/About";
import Task from "./Pages/Task";
import ProfileInformation from "./Pages/ProfileInformation";

function App() {
  return (
    <Router>
      <Auth0Provider
        domain="dev-x89v66tk.us.auth0.com"
        clientId="U1u4Hx1LAyimGh1nZzPd1wPUK9QmUW5H"
        redirectUri={document.location.origin}
      >
        <GlobalProvider>
          <CustomNav />
          <CustomToast />
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfileInformation />} />
          </Routes>
        </GlobalProvider>
      </Auth0Provider>
    </Router>
  );
}

export default App;
