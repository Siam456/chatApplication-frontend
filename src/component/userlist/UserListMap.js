import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserListMap() {
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

  return (
    <div>
      <div>
        {userList?.map((v, i) => {
          return (
            <div key={v._id} className="user-li">
              {v.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
