import React from "react";
import "./ChatListItem.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => {
  return (
    <div onClick={onClick} className={`ChatListItem ${active ? "active" : ""}`} >
      <img className="ChatListItem-avatar" src={data.image} alt="personal" />
      <div className="ChatListItem-lines">
        <div className="ChatlistItem-line">
          <div className="ChatListItem-name">{data.title}</div>
          <div className="ChatListItem-date">{data.date}</div>
        </div>
        <div className="ChatlistItem-line">
          <div className="ChatListItem-lastMsg">
            <p>
              {data.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}