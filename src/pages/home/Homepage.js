import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { Auth } from "../../component/nav/Navbar";
import "./style.css";
import UserList from "../../component/userlist/UserList";
import Conversation from "../../component/conversation/Conversation";
import Profile from "../../component/profile/Profile";

export default function Homepage() {
  let [auth, setAuth] = useContext(Auth);
  const [fetchConversationFlag, setFetchConversationFlag] = useState(false);

  const logout = () => {
    // Cookies.remove("siams app");
    Cookies.remove("chatApp", { path: "/" });
    setAuth(false);
  };

  //open profile modal
  const openProfile = () => {
    document.getElementById("profile").style.left = 0;
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
                    cursor: "pointer",
                  }}
                  onClick={() => openProfile()}
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
                    margin: "20px",
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
                    <i className="fa-solid fa-power-off" onClick={logout}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Conversation fetchConversationFlag={fetchConversationFlag} />
          </div>
        </div>
        <div className="grid-item sec">sxasdedss</div>
      </div>
      <UserList fetchConversationFlag={fetchConversationFlag} setFetchConversationFlag={setFetchConversationFlag} />
      <Profile />
    </div>
  );
}
