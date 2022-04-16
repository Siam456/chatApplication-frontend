import React from "react";
import UserListMap from "./UserListMap";

export default function UserList() {
  return (
    <div id="allUserList" className="allUser">
      <div className="allUserHeader">
        <p
          style={{
            alignSelf: "flex-end",
            margin: "10px",
            paddingLeft: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            document.getElementById("allUserList").style.left = "-50%";
          }}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/arrow-pointing-left--v2.png"
            alt="arrow"
          />
        </p>
        <p
          style={{
            alignSelf: "flex-end",
            margin: "20px",
          }}
        >
          New Chat
        </p>
      </div>
      <UserListMap />
    </div>
  );
}
