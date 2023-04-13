import React, {useEffect, useState} from "react";
import { api } from "../api/Api";

export default function Message({item}) {
  const [messInfo, setMessInfo] = useState(null);

  useEffect(() => {
    if(item) {
      api.getChatsMess(item.id)
      .then(res => {
        setMessInfo(res.response);
      })
      .catch(err => console.log(err))
    }
  }, [item]);

  return (
    <ul className="mess-lists margin-null">
      {messInfo ? messInfo.map(item =>
        <li className={`mess-lists__list ${item.user.you ? 'mess-lists__list_mess_your' : ''}`} key={item.id}>
          <div className="mess-lists__avatar" style={{backgroundImage: 'url('+ item.user.avatar +')'}}></div>
          <div className="mess-lists__info">
            <p className="mess-lists__name margin-null">{item.user.name + ' ' + item.user.surname}</p>
            <p className="mess-lists__text margin-null">{item.message}</p>
          </div>
        </li>
      ) : ''}
    </ul>
  );
}