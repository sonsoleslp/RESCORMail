function chatsReducer(state = true, action){
  switch (action.type){
  case 'UPDATE_CHATS':
    return action.chats;
  default:
    return state;
  }
}

export default chatsReducer;