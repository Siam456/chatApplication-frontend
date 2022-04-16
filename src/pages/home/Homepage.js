import React, { useContext } from "react";
import Cookies from "js-cookie";
import { Auth } from "../../component/nav/Navbar";
import "./style.css";
import UserList from "../../component/userlist/UserList";

export default function Homepage() {
  let [auth, setAuth] = useContext(Auth);

  const logout = () => {
    // Cookies.remove("siams app");
    Cookies.remove("chatApp", { path: "/" });
    setAuth(false);
  };
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="appBar">
            <div>
              <div className="appUpper">
                <div
                  style={{
                    margin: "10px",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
                    alt="userAvatar"
                    height={"40px"}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <span className="icon">
                    <i
                      className="fa-solid fa-message "
                      onClick={() => {
                        document.getElementById("allUserList").style.left = 0;
                      }}
                    ></i>
                  </span>
                  <span className="icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item sec">sxasdedss</div>
      </div>
      <UserList />
    </div>
  );
}
