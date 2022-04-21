import React, { useContext, useState } from "react";
import { MyInfo } from "../nav/Navbar";
import InputModal from "./InputModal";

export default function ProfileInfo() {
  const [editModalTag, setEditModalTag] = useState("name");
  const [profileInfo, setProfileInfo] = useContext(MyInfo);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2XUjKXh-LnMkWDgqaXlVXJ6dJTfLBxIbnQ&usqp=CAU"
          alt="main profile img"
          className="profileImg"
        />
      </div>
      <div
        className="bg_white"
        style={{
          padding: "30px",
          marginBottom: "20px",
        }}
      >
        <p className="profile-title">Your name</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              marginTop: "10px",
              fontSize: "1.5rem",
            }}
          >
            {profileInfo?.name}
          </p>
          <span className="icon">
            <i
              className="fa-solid fa-pencil"
              onClick={() => {
                document
                  .getElementById("inputModalWrapper")
                  .classList.add("scalling");
                setEditModalTag("name");
                document.getElementById("error").textContent = "";
              }}
            ></i>
          </span>
        </div>
      </div>
      <div
        style={{
          padding: "30px",
        }}
      >
        This is not your username or pin. This name will be visible to your
        SkyNet contacts.
      </div>
      <div
        className="bg_white"
        style={{
          padding: "30px",
          marginBottom: "20px",
        }}
      >
        <div>
          <p className="profile-title">Your email</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                marginTop: "10px",
                fontSize: "1.5rem",
              }}
            >
              {profileInfo?.email}
            </p>
            <span className="icon">
              <i
                className="fa-solid fa-pencil"
                onClick={() => {
                  document
                    .getElementById("inputModalWrapper")
                    .classList.add("scalling");
                  setEditModalTag("email");
                  document.getElementById("error").textContent = "";
                }}
              ></i>
            </span>{" "}
          </div>
        </div>
        <br />
        <br />
        <div>
          <p className="profile-title">Your phone</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                marginTop: "10px",
                fontSize: "1.5rem",
              }}
            >
              {profileInfo?.phone}
            </p>
            <span className="icon">
              <i
                className="fa-solid fa-pencil"
                onClick={() => {
                  document
                    .getElementById("inputModalWrapper")
                    .classList.add("scalling");
                  setEditModalTag("phone");
                  document.getElementById("error").textContent = "";
                }}
              ></i>
            </span>{" "}
          </div>
        </div>
      </div>
      <InputModal
        editModalTag={editModalTag}
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
      />
    </div>
  );
}
