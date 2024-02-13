import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { IoMdSend } from "react-icons/io";
import ChatItem from '../components/chats/Chat';
import auth from "../services/auth";


const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const inputRef = useRef(null);
  const authi = useSelector(state => state.auth);
  const name = auth['user'];
  
  

const handleSubmit=async()=>{
      const content = inputRef.current.value
      if(inputRef && inputRef.current){
        inputRef.current.value = ""
      }
      const newMessage = {"role":"User",content}
      setChatMessages((prev=>[...prev,newMessage]))
      const chatData = await auth.sendChat(content)
      setChatMessages([...chatData.chat])

}
console.log(chatMessages)
  

  return (
    <div className="d-flex  flex-1 mt-3">
      <div className="d-md-flex d-none d-sm-none flex-column flex-0.2">
        <div className="d-flex flex-column w-100 h-60vh bg-dark p-3 rounded-3 mx-3">
          <div className="mx-auto my-2 bg-white text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64, fontWeight: 'bold', fontSize: '2rem' }}>
           {/* {auth['user'][0]}
            {auth['user'].split(' ')[1][0]} */}
          </div>
          <p className="mx-auto font-family-work-sans text-center">You are talking to a ChatBOT</p>
          <p className="mx-auto font-family-work-sans my-4 px-3 text-center">You can ask some questions related to Knowledge, Business, Advices, Education, etc. But avoid sharing personal information</p>
          <button className="btn btn-danger mx-auto font-weight-bold rounded-3 d-block w-50 mx-auto">Clear Conversation</button>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-0.8 flex-xs-1 flex-sm-1 px-3">
        <h1 className="font-size-40px text-white mb-2 mx-auto font-weight-bold text-center">Model - GPT 3.5 Turbo</h1>
        <div className="w-100 h-60vh rounded-3 mx-auto overflow-auto">
          {chatMessages.map((chat, index) => (
            <div key={index} className="chat-item"><ChatItem content={chat.content} role={chat.role}/></div>
          ))}
        </div>
        <div className="w-100 bg-dark d-flex rounded-3" style={{ borderRadius: 8 }}>
          <input
            ref={inputRef}
            type="text"
            className="w-100 bg-transparent py-2 px-4 border-0 outline-none text-white font-size-20px"
          />
          <button className="btn btn-outline-light" onClick={handleSubmit}><IoMdSend /></button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
