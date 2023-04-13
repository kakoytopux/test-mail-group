class Api {
  constructor(opt) {
    this._headers = opt.headers;
  }
  getChatsInfo() {
    return fetch('https://api.lenzaos.com/test/chat.get', {
      method: 'GET',
      headers: this._headers
    })
    .then(res => res.json())
  }
  getChatsMess(chatId) {
    return fetch(`https://api.lenzaos.com/test/message.get?chat_id=${chatId}&offset=0&limit=5`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => res.json())
  }
}

export const api = new Api({
  headers: {
    'Content-Type': 'application/json'
  }
});