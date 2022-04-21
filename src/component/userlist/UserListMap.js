import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserListMap({
  fetchConversationFlag,
  setFetchConversationFlag,
}) {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/user");
        if (response) {
          setUserList(response.data.data);
        }
      } catch (err) {
        console.log(err.response);
      }
    };

    fetchUser();
    return () => {};
  }, []);

  const createConversation = (user) => {
    document.getElementById("allUserList").style.left = "-50%";
    // console.log(user);
    const postData = async () => {
      try {
        const response = await axios.post("/inbox/conversation", user);
        if (response) {
          console.log(response);
          setFetchConversationFlag(!fetchConversationFlag);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    postData();
  };

  return (
    <div>
      <div>
        {userList?.map((v, i) => {
          return (
            <div
              key={v._id}
              className="user-li"
              onClick={() => createConversation(v)}
            >
              {v.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
