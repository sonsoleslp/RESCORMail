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
    //Add id to each email
    for(var j=0; j<emails.length; j++){
      emails[j].id = (j+1);
      //Add each to email to its corresponding categories
      if((!(emails[j].categories instanceof Array))||(emails[j].categories.length === 0)){
        emails[j].categories = ["received"];
      }
      for(var k=0; k<emails[j].categories.length; k++){
        this.state[emails[j].categories[k]].push(emails[j].id);
      }
    }
    this.state.emails = emails;
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
  render(){
    let emails = this.getEmailsFromCategory(this.state.selectedCategory);
    return <div className="wrapper">
	    <LeftMenu state={this.state} profile={profile} selectCategory={category=>this.setState({selectedCategory:category})}/>
	    <EmailList emails={emails} selectedEmailIndex={this.state.selectedEmailIndex} selectEmail={index=>this.setState({selectedEmailIndex:index})} />
	    <EmailContent profile={profile} email={emails[this.state.selectedEmailIndex]}/>
	  </div>;
  }
}