import {useState, useEffect} from "react";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import NewChat from "./components/NewChat";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Login from "./components/Login";
import './App.css';


function App() {
  const [user, setUser] = useState({
    id: 1234,
    avatar: "https://github.com/ezequiassantos11.png",
    name: "Ezequias Soares"
  });
  const [chatList, setChatList] = useState([
    {chatId: 1, title: "Ezequias Santos", date: "12:00", message: "alkfjaçldkfjaçdkfjadflkajdflçkadjfaçlkdfjadfkjaçldkfjakfdjienavb78549", image: "https://thumbs.dreamstime.com/b/user-profile-avatar-solid-black-icon-simple-vector-filled-flat-line-pictogram-isolated-white-background-134042567.jpg"},
    {chatId: 2, title: "Ezequias Santos", date: "12:00", message: "alkfjaçldkfjaçdkfjadflkajdflçkadjfaçlkdfjadfkjaçldkfjakfdjienavb78549", image: "https://thumbs.dreamstime.com/b/user-profile-avatar-solid-black-icon-simple-vector-filled-flat-line-pictogram-isolated-white-background-134042567.jpg"},
    {chatId: 3, title: "Ezequias Santos", date: "12:00", message: "alkfjaçldkfjaçdkfjadflkajdflçkadjfaçlkdfjadfkjaçldkfjakfdjienavb78549", image: "https://thumbs.dreamstime.com/b/user-profile-avatar-solid-black-icon-simple-vector-filled-flat-line-pictogram-isolated-white-background-134042567.jpg"},
    {chatId: 4, title: "Ezequias Santos", date: "12:00", message: "alkfjaçldkfjaçdkfjadflkajdflçkadjfaçlkdfjadfkjaçldkfjakfdjienavb78549", image: "https://thumbs.dreamstime.com/b/user-profile-avatar-solid-black-icon-simple-vector-filled-flat-line-pictogram-isolated-white-background-134042567.jpg"},
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setShowNewChat] = useState(false);
  const handleNewChat = ()=>{
    setShowNewChat(true);
  };
  const handleLoginData = async (u)=>{
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUser(newUser);
  }
  if(user === null){
    return (<Login onReceive={handleLoginData}/>);
  }
  return (
   <div className="app-window">
    <div className="sidebar">
      <NewChat
        user={user}
        chatList={chatList}
        show={showNewChat}
        setShow={setShowNewChat}
      />
      <header>
        <img className="header-avatar" src={user.avatar} alt="" />
        <div className="header-buttons">
          <div className="header-btn">
            <DonutLargeIcon style={{color: '#919191'}}/>
          </div>
          <div onClick={handleNewChat} className="header-btn">
            <ChatIcon style={{color: '#919191'}}/>
          </div>
          <div className="header-btn">
            <MoreVertIcon style={{color: '#919191'}}/>
          </div>
        </div>
      </header>
      <div className="search">
        <div className="search-input">
          <SearchIcon fontSize="small" style={{color: '#919191'}}/>
          <input type="search" placeholder='Procurar ou começar uma nova conversa' />
        </div>
      </div>
      <div className="chatlist">
        {chatList.map((item, key) => (
          <ChatListItem
            key={key}
            data={item}
            active={activeChat.chatId === chatList[key].chatId}
            onClick={()=>setActiveChat(chatList[key])}
          />
        ))}
      </div>
    </div>
    <div className="contentarea">
      {activeChat.chatId === undefined ? <ChatIntro/> : <ChatWindow user={user}/> }
    </div>
   </div>
  );
}

export default App;
