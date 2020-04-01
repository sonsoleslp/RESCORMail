function loadingReducer(state = true, action){
  switch (action.type){
  case 'LOADED':
    return !action.loaded;
  default:
    return state;
  }
}

export default loadingReducer;