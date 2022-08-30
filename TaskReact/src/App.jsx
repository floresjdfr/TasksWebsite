//React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNav from "./components/utils/CustomNav";
import CustomToast from "./components/utils/CustomToast";

import GlobalProvider from "./contexts/GlobalContext";
import About from "./Pages/About";
import Task from "./Pages/Task";
import Profile from "./Pages/Profile";
import Loading from "./components/utils/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  const { isLoading } = useAuth0();

  return (
    <GlobalProvider>
      <CustomNav />
      <CustomToast />
      <div className="container my-4">
        {isLoading ? <Loading /> : <CustomRoutes />}
      </div>
    </GlobalProvider>
  );
}

function CustomRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
