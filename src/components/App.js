import React, {useEffect, useState} from 'react';
import ChatItemList from './ChatItemList';
import Chat from './Chat';
import { api } from '../api/Api';

export default function App() {
  const [chatInfo, setChatInfo] = useState([]);
  const [openedChat, setOpenedChat] = useState(null);

  function openChat(chat) {
    setOpenedChat(chat);
  }

  useEffect(() => {
    api.getChatsInfo()
    .then(res => {
      setChatInfo(res.response);
    })
    .catch(err => console.log(err))
  });

  return (
    <>
      <ChatItemList chatInfo={chatInfo} openChat={openChat} />
      <Chat item={openedChat ? openedChat : null} />
    </>
  );
}