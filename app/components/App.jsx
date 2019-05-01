import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/samples.js';

import SCORM from './SCORM.jsx';
import Inbox from './Inbox.jsx';
import Login from './Login';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {login: false};
    I18n.init();
  }
  render(){
    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        {this.state.login ? <Inbox/> : <Login login={()=>this.setState({login: true})}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);