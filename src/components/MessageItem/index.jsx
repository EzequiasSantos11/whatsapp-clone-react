import "./MessageItem.css";

export default function MenssageItem({data, user}){
  return(
    <div 
      className="message-line" 
      style={{justifyContent: user.id === data.author ? "flex-end" : "flex-start"}}
    >
      <div 
        className="messageItem"
        style={{backgroundColor: user.id === data.author ? "#DCF8C6" : "#FFF"}}
      >
        <div className="message-text">{data.body}</div>
        <div className="message-date">19:00</div>
      </div>
    </div>
  )
}