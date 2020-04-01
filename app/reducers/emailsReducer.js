function emailsReducer(state = true, action){
  switch (action.type){
  case 'UPDATE_EMAILS':
    return action.emails;
  default:
    return state;
  }
}

export default emailsReducer;