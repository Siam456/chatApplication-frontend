import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

export default function Conversation({ fetchConversationFlag }) {
  const [conversation, setConversation] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/inbox/conversation");

        if (response) {
          setConversation(response.data.response);
        } else {
          console.log("something was wrong");
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
    return () => {};
  }, [fetchConversationFlag]);

  return (
    <div>
      {conversation?.map((v, i) => {
        return (
          <div key={v._id}>
            <div className="convList">
              <div>
                {v.avatar ? (
                  <img alt="nai" />
                ) : (
                  <div
                    style={{
                      height: "45px",
                      width: "45px",
                      background: "gray",
                      textAlign: "center",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {v.participator.name.charAt(0)}
                  </div>
                )}
              </div>
              <div
                style={{
                  marginLeft: "20px",
                }}
              >
                {v.participator.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
