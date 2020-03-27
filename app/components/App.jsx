import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';
import './../assets/scss/fontroboto.scss';

import * as LocalStorage from '../assets/javascripts/Storage.js';
import {GLOBAL_CONFIG} from '../config/config.js';

import Inbox from './Inbox.jsx';
import Login from './Login';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {login:false, login_error:false};
    LocalStorage.init(window.local_storage_key || GLOBAL_CONFIG.local_storage_key);
    this.login = this.login.bind(this);
    this.login_success = this.login_success.bind(this);
    this.close = this.close.bind(this);
  }
  componentDidMount(){
    if(LocalStorage.getSetting("logged") === "true"){
      this.login_success();
    }
  }
  login(data){
    if(typeof window.checkLoginRESCORMail === "function"){
      window.checkLoginRESCORMail(data,function(success){
        if(success){
          this.login_success();
        } else {
          this.setState({login_error:true});
        }
      }.bind(this));
    }
  }
  login_success(){
    LocalStorage.saveSetting("logged", "true"); // Save in local storage
    this.setState({login_error:false});
    this.setState({login:true});
  }
  close(){
    LocalStorage.removeSetting("logged");
    this.setState({login_error:false});
    this.setState({login:false});
  }
  render(){
    return (
      <div id="container">
        {this.state.login ? <Inbox config={GLOBAL_CONFIG} close={this.close}/> : <Login login={this.login} error={this.state.login_error} config={GLOBAL_CONFIG}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);