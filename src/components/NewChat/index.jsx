import {useState} from "react";
import "./NewChat.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default function NewChat({user, chatList, show, setShow}){
  const [list, setList] = useState([
    {id: 123, avatar: "https://github.com/ezequiassantos11.png", name: "Dani Linda"},
    {id: 123, avatar: "https://github.com/ezequiassantos11.png", name: "Dani Linda"},
    {id: 123, avatar: "https://github.com/ezequiassantos11.png", name: "Dani Linda"},
    {id: 123, avatar: "https://github.com/ezequiassantos11.png", name: "Dani Linda"},
  ]);
  const handleClose = ()=>{
    setShow(false);
  };
  return(
    <div className="newChat" style={{left: show ? 0 : -415}}>
      <div className="newchat-header">
        <div className="newchat-backbutton" onClick={handleClose}>
          <ArrowBackIcon style={{color: "#FFF"}} />
        </div>
        <div className="newchat-title">
          Nova Conversa
        </div>
      </div>
      <div className="newchat-list">
        {list.map((item, key)=>(
          <div key={key} className="newChat-item">
            <img src={item.avatar} alt="avatar" className="newChat-avatar" />
            <div className="newChat-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}