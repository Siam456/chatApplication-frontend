import React, { useContext } from "react";
import Cookies from "js-cookie";
import { Auth } from "../../component/nav/Navbar";

export default function Homepage() {
  let [auth, setAuth] = useContext(Auth);

  const logout = () => {
    // Cookies.remove("siams app");
    Cookies.remove("chatApp", { path: "/" });
    setAuth(false);
  };
  return (
    <div>
      Homepage
      <button onClick={logout}>logout</button>
    </div>
  );
}
