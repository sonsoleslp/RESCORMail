function profileReducer(state = true, action){
  switch (action.type){
  case 'UPDATE_PROFILE':
    return action.profile;
  default:
    return state;
  }
}

export default profileReducer;