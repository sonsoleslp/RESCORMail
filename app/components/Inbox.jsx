import React from 'react';
import emailsDefault from '../config/emails';
import profileDefault from '../config/profile';
import "../assets/scss/style.sass";

import LeftMenu from './emailComponents/LeftMenu';
import EmailList from './emailComponents/EmailList';
import EmailContent from './emailComponents/EmailContent';

export default class Inbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedEmail:undefined,
    };
  }
  render(){
    let emails = window.emails || emailsDefault;
    let profile = window.profile || profileDefault;
    profile.email = profile.username + "@" + profile.domain;
    let selectedEmail = this.state.selectedEmail;
    return <div className="wrapper">
	    <LeftMenu profile={profile}/>
	    <EmailList emails={emails} selectedEmail={selectedEmail} selectEmail={index=>this.setState({selectedEmail:index})}/>
	    <EmailContent profile={profile} email={emails[selectedEmail]}/>
	  </div>;
  }
}