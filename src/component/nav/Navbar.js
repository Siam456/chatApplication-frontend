import React, { createContext, useEffect, useState } from "react";
import Login from "../../pages/login/Login";
import Cookies from "js-cookie";
import Homepage from "../../pages/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "../test/Test";
import NotFound from "../test/NotFound";

export const Auth = createContext({});

export default function Navbar() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let checkCookie = Cookies.get("chatApp");
    if (checkCookie) {
      setAuth(true);
    }

    return () => {};
  }, []);

  return (
    <Auth.Provider value={[auth, setAuth]}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {auth ? (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/test" element={<Test />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}
