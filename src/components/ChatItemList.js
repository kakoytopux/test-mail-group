import React, { useState } from 'react';

export default function ChatItemList({chatInfo, openChat}) {
  const [select, setSelect] = useState(null);

  return (
    <>
      <section className='chats'>
        <h2 className='chats__title margin-null'>All chats</h2>
        <ul className='chats__lists margin-null'>
            {chatInfo.map(item =>
              <li className={`chats__list ${item.id === select ? 'chats__list_selected' : ''}`} key={item.id} onClick={() => {setSelect(item.id); openChat(item)}}>
                <div className='chats__avatar' style={{backgroundImage: 'url(' + item.avatar + ')'}}></div>
                <div className='chats__container'>
                  <div className='chats__container-info-chat'>
                    <p className='chats__name margin-null'>{item.title}</p>
                    <p className='chats__time margin-null'>12:07</p>
                  </div>
                  <p className='chats__mess'>{item.last_message.message}</p>
                </div>
              </li>
            )}
        </ul>
      </section>
    </>
  );
}