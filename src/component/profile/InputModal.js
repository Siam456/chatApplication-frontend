import axios from "axios";
import React, { useEffect, useState } from "react";

export default function InputModal({
  profileInfo,
  editModalTag,
  setProfileInfo,
}) {
  const [info, setInfo] = useState(profileInfo);

  useEffect(() => {
    setInfo(profileInfo);

    return () => {};
  }, [profileInfo]);

  //handle submit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const editInfo = async () => {
      try {
        const response = await axios.put(`/user/${info._id}`, info);
        if (response) {
          console.log(response);
          setProfileInfo(info);
        }
      } catch (err) {
        if (Object.keys(err.response.data.errors)[0] === "name") {
          document.getElementById("error").textContent =
            err.response.data.errors.name.msg;
        } else if (Object.keys(err.response.data.errors)[0] === "email") {
          document.getElementById("error").textContent =
            err.response.data.errors.email.msg;
        } else if (Object.keys(err.response.data.errors)[0] === "phone") {
          document.getElementById("error").textContent =
            err.response.data.errors.phone.msg;
        }
      }
    };
    editInfo();
  };
  return (
    <div id="inputModalWrapper" className="inputModalWrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Edit {editModalTag}</div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            document
              .getElementById("inputModalWrapper")
              .classList.remove("scalling");
            setInfo(profileInfo);
          }}
        >
          x
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control2"
          type={editModalTag === "email" ? "email" : "text"}
          name={editModalTag}
          value={info ? info[editModalTag] : "name"}
          onChange={handleChange}
        />{" "}
        <br />
        <p id="error">siamsiam</p>
        <input
          className="btn"
          type={"submit"}
          value={`edit ${editModalTag}`.toLocaleUpperCase()}
        />
      </form>
    </div>
  );
}
