function loggedReducer(state = true, action){
  switch (action.type){
  case 'LOGGED':
    return action.logged;
  default:
    return state;
  }
}

export default loggedReducer;