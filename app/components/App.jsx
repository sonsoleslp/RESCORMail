import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';

import Inbox from './Inbox.jsx';
import Login from './Login';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {login:false};
    I18n.init();
  }
  render(){
    return (
      <div id="container">
        {this.state.login ? <Inbox config={GLOBAL_CONFIG}/> : <Login login={()=>this.setState({login:true})} config={GLOBAL_CONFIG}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);