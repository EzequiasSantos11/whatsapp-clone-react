import Api from "../../Api";
import "./Login.css";

export default function Login({onReceive}){
  const handleLoginFacebook = async ()=>{
    let result = await Api.fbPopup();
    if(result){
      onReceive=(result.user);
    }else{
      alert("error!");
    }

  }; 
  return(
    <div className="login">
      <button onClick={handleLoginFacebook} className="btton">
        Entrar com facebook
      </button>
    </div>
  );
}