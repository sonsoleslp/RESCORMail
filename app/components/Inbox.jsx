import React from 'react';
import emailsDefault from '../config/emails';
import profileDefault from '../config/profile';
import "../assets/scss/style.sass";

import LeftMenu from './emailComponents/LeftMenu';
import EmailList from './emailComponents/EmailList';
import EmailContent from './emailComponents/EmailContent';

const CATEGORIES = ["received","highlighted","postponed","important","sent","draft"];
let profile;

export default class Inbox extends React.Component {
  constructor(props){
    super(props);
    
    profile = window.profile || profileDefault;
    profile.email = profile.username + "@" + profile.domain;
    
    this.state = {
      emails: [],
      selectedEmailIndex: undefined,
      selectedCategory: "received",
    };
    for(var i=0; i<CATEGORIES.length; i++){
      this.state[CATEGORIES[i]] = [];
    }

    let emails = window.emails || emailsDefault;
    //Check emails
    for(var j=0; j<emails.length; j++){
      //Add id to each email
      emails[j].id = (j+1);
      //Add unreaded boolean if not present
      emails[j].unread = (typeof emails[j].unread === "undefined" ? true : emails[j].unread);
      //Add each to email to its corresponding categories
      if((!(emails[j].categories instanceof Array))||(emails[j].categories.length === 0)){
        emails[j].categories = ["received"];
      }
      for(var k=0; k<emails[j].categories.length; k++){
        this.state[emails[j].categories[k]].push(emails[j].id);
      }
    }
    this.state.emails = emails;

    this.readEmail = this.readEmail.bind(this);
    this.getEmailsFromCategory = this.getEmailsFromCategory.bind(this);
    this.getUnreadEmailsFromCategory = this.getUnreadEmailsFromCategory.bind(this);
  }
  readEmail(emailIndex){
    let email = this.state.emails[emailIndex];
    email.unread = false;
    this.setState({selectedEmailIndex:emailIndex});
  }
  getEmailsFromCategory(category){
    let emails = [];
    for(var i=0; i<this.state.emails.length; i++){
      if(this.state.emails[i].categories.indexOf(category)!==-1){
        emails.push(this.state.emails[i]);
      }
    }
    return emails;
  }
  getUnreadEmailsFromCategory(category){
    let unreadMails = [];
    let emails = this.getEmailsFromCategory(category);
    for(var i=0; i<emails.length; i++){
      if(emails[i].unread){
        unreadMails.push(emails[i]);
      }
    }
    return unreadMails;
  }
  render(){
    let emails = this.getEmailsFromCategory(this.state.selectedCategory);
    return <div className="wrapper">
	    <LeftMenu profile={profile} selectedCategory={this.state.selectedCategory} getUnreadEmailsFromCategory={this.getUnreadEmailsFromCategory} selectCategory={category=>this.setState({selectedCategory:category})}/>
	    <EmailList emails={emails} selectedEmailIndex={this.state.selectedEmailIndex} selectEmail={this.readEmail} />
	    <EmailContent profile={profile} email={emails[this.state.selectedEmailIndex]}/>
	  </div>;
  }
}