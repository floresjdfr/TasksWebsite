import { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function GlobalProvider({ ...props }) {
  const [showToast, setShowToast] = useState(false);
  const [toastHeader, setToastHeader] = useState("");
  const [toastBody, setToastBody] = useState("");
  const auth0 = useAuth0();

  const value = {
    //Toast
    showToast,
    setShowToast,
    toastHeader,
    setToastHeader,
    toastBody,
    setToastBody,

    //Login
    auth0
  };

  return <GlobalContext.Provider {...props} value={value} />;
}

export const GlobalContext = createContext();
export default GlobalProvider;
