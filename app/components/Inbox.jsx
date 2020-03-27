import React from 'react';
import emailsDefault from '../config/emails';
import profileDefault from '../config/profile';
import "../assets/scss/style.sass";

import LeftMenu from './emailComponents/LeftMenu';
import EmailList from './emailComponents/EmailList';
import EmailContent from './emailComponents/EmailContent';

const CATEGORIES = ["received", "highlighted", "postponed", "important", "sent", "draft"];
let profile;

export default class Inbox extends React.Component {
  constructor(props){
    super(props);

    profile = window.profile || profileDefault;
    profile.email = profile.username + "@" + profile.domain;

    this.state = {
      emails:[],
      selectedEmailId:undefined,
      selectedCategory:"received",
    };
    for(let i = 0; i < CATEGORIES.length; i++){
      this.state[CATEGORIES[i]] = [];
    }

    let emails = window.emails || emailsDefault;
    // Check emails
    for(let j = 0; j < emails.length; j++){
      // Add id to each email
      emails[j].id = (j + 1);
      // Add unreaded boolean if not present
      emails[j].unread = (typeof emails[j].unread === "undefined" ? true : emails[j].unread);
      // Add each to email to its corresponding categories
      if((!(emails[j].categories instanceof Array)) || (emails[j].categories.length === 0)){
        emails[j].categories = ["received"];
      }
      for(let k = 0; k < emails[j].categories.length; k++){
        this.state[emails[j].categories[k]].push(emails[j].id);
      }
    }
    this.state.emails = emails;

    this.readEmail = this.readEmail.bind(this);
    this.highlightEmail = this.highlightEmail.bind(this);
    this.getEmailsFromCategory = this.getEmailsFromCategory.bind(this);
    this.getUnreadEmailsFromCategory = this.getUnreadEmailsFromCategory.bind(this);
  }
  readEmail(emailId){
    let email = this.getEmailById(emailId);
    email.unread = false;
    this.setState({selectedEmailId:emailId});
  }
  getEmailById(emailId){
    if(typeof emailId !== "number"){
      return undefined;
    }
    for(let i = 0; i < this.state.emails.length; i++){
      if(this.state.emails[i].id === emailId){
        return this.state.emails[i];
      }
    }
    return undefined;
  }
  getEmailsFromCategory(category){
    let emails = [];
    for(let i = 0; i < this.state[category].length; i++){
      let emailId = this.state[category][i];
      for(let j = 0; j < this.state.emails.length; j++){
        if(this.state.emails[j].id === emailId){
          emails.push(this.state.emails[j]);
          break;
        }
      }
    }
    return emails;
  }
  getUnreadEmailsFromCategory(category){
    let unreadMails = [];
    let emails = this.getEmailsFromCategory(category);
    for(let i = 0; i < emails.length; i++){
      if(emails[i].unread){
        unreadMails.push(emails[i]);
      }
    }
    return unreadMails;
  }
  highlightEmail(emailId){
    if((typeof emailId !== "number") && (typeof this.state.selectedEmailId === "number")){
      emailId = this.state.selectedEmailId;
    }
    let email = this.getEmailById(emailId);
    if(typeof email !== "undefined"){
      let hIndex = this.state.highlighted.indexOf(email.id);
      if(hIndex === -1){
        // Add to highlights
        this.state.highlighted.push(email.id);
      } else {
        // Remove from highlights
        this.state.highlighted.splice(hIndex, 1);
      }
      this.setState({highlighted:this.state.highlighted});
    }
  }
  render(){
    let emails = this.getEmailsFromCategory(this.state.selectedCategory);
    let email = this.getEmailById(this.state.selectedEmailId);
    return <div className="wrapper">
	    <LeftMenu profile={profile} selectedCategory={this.state.selectedCategory} getUnreadEmailsFromCategory={this.getUnreadEmailsFromCategory} selectCategory={category=>this.setState({selectedCategory:category})} close={this.props.close}/>
	    <EmailList emails={emails} highlightedEmails={this.state.highlighted} selectedEmailId={this.state.selectedEmailId} selectEmail={this.readEmail} highlightEmail={this.highlightEmail} />
	    <EmailContent profile={profile} email={this.getEmailById(this.state.selectedEmailId)} highlightedEmails={this.state.highlighted} highlightEmail={this.highlightEmail} />
	  </div>;
  }
}