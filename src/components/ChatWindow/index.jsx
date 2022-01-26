import {useState, useEffect, useRef} from "react";
import MessageItem from "../MessageItem";
import EmojiPiker from "emoji-picker-react";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import "./ChatWindow.css";

export default function ChatWindow({user}){
  const body = useRef();
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }
  const [ openEmoji, setOpenEmoji] = useState(false);
  const [ listening, setListening ] = useState(false);
  const [ text, setText ] = useState("");
  const [list, setList] = useState([
    {author: 123, body: "bla bla bla"},
    {author: 123, body: "bla bla bla bla bla bla"},
    {author: 1234, body: "bla bla bla bla"},
    {author: 123, body: "bla bla bla"},
    {author: 123, body: "bla bla bla bla bla bla"},
    {author: 1234, body: "bla bla bla bla"},
    {author: 123, body: "bla bla bla"},
    {author: 123, body: "bla bla bla bla bla bla"},
    {author: 1234, body: "bla bla bla bla"},
    {author: 123, body: "bla bla bla"},
    {author: 123, body: "bla bla bla bla bla bla"},
    {author: 1234, body: "bla bla bla bla"},
    {author: 123, body: "bla bla bla"},
    {author: 123, body: "bla bla bla bla bla bla"},
    {author: 1234, body: "bla bla bla bla"},
    {author: 123, body: "bla bla bla"},
    {author: 123, body: "bla bla bla bla bla bla"},
    {author: 1234, body: "bla bla bla bla"},
  ]);
  useEffect(()=>{
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  },[list])
  const handleEmoji = (e, emojiObject)=>{
    setText(text + emojiObject.emoji);
  };
  const handleEmojiOpen = ()=>{
    setOpenEmoji(true);
  };
  const handleEmojiClose = ()=>{
    setOpenEmoji(false);
  };
  const handleMicClick = ()=>{
    if(recognition !== undefined){
      recognition.onstart = ()=>{
        setListening(true);
      }
      recognition.onend = ()=>{
        setListening(false);
      }
      recognition.onresult = (e)=>{
        setText(e.results[0][0].transcript);
      }
      recognition.start();
    }
  };
  const handleSendClick = ()=>{};
  return(
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerInfo">
          <img className="chatWindow-avatar" src="https://thumbs.dreamstime.com/b/user-profile-avatar-solid-black-icon-simple-vector-filled-flat-line-pictogram-isolated-white-background-134042567.jpg" alt="" />
          <div className="chatWindow-name">Ezequias Santos</div>
        </div>
        <div className="chatWindow-headerButtons">
          <div className="chatWindow-btn">
            <SearchIcon style={{color: "#919191"}} />
          </div>
          <div className="chatWindow-btn">
            <AttachFileIcon style={{color: "#919191"}} />
          </div> 
          <div className="chatWindow-btn">
            <MoreVertIcon style={{color: "#919191"}} />
          </div>
        </div>
      </div>
      <div ref={body} className="chatWindow-body">
        {list.map((item, key)=>(
          <MessageItem
            key={key}
            data={item}
            user={user}
          />
        ))}
      </div>
      <div className="chatWindow-emojiarea" style={{height: openEmoji ? "200px" : "0px"}}>
        <EmojiPiker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmoji}
        />
      </div>
      <div className="chatWindow-footer">
        <div className="chatWindow-pre">
          <div 
            className="chatWindow-btn" 
            onClick={handleEmojiClose}
            style={{width: openEmoji?40:0}}
          >
            <CloseIcon style={{color: "#919191"}} />
          </div> 
          <div className="chatWindow-btn" onClick={handleEmojiOpen}>
            <InsertEmoticonIcon style={{color: openEmoji?"#009688":"#919191"}} />
          </div> 
        </div>
        <div className="chatWindow-inputarea">
          <input 
            className="chatWindow-input" 
            type="text" 
            placeholder='Digite uma mensagem...'
            value={text}
            onChange={e=> setText(e.target.value)}
            id="" 
          />
        </div>
        <div className="chatWindow-pos">
          {text === ""?
            <div onClick={handleMicClick} className="chatWindow-btn">
              <MicIcon style={{color: listening?"#126ece" : "#919191"}} />
            </div> 
            :
            <div onClick={handleSendClick} className="chatWindow-btn">
              <SendIcon style={{color: "#919191"}} />
            </div>           
          }
        </div>
      </div>
    </div>
  );
}