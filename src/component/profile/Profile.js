import React from "react";
import ProfileInfo from "./ProfileInfo";
import "./style.css";

export default function Profile() {
  return (
    <div
      id="profile"
      className="allUser"
      style={{
        background: "#F0F2F5",
      }}
    >
      <div className="allUserHeader">
        <p
          style={{
            alignSelf: "flex-end",
            margin: "10px",
            paddingLeft: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            document.getElementById("profile").style.left = "-50%";
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
          Profile
        </p>
      </div>
      <ProfileInfo />
    </div>
  );
}
