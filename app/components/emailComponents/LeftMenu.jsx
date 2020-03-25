import React from 'react';
import Actions from './Actions';
import ChatContact from './ChatContact';
import chatDefault from '../../config/chat';
export default class LeftMenu extends React.Component {

  render(){
    let chat = window.chat || chatDefault;
    let profile = this.props.profile;
    return <div className="col1">
      <div className="top1">
        <div className="menu1"><i className="fas fa-bars" /></div>
        <div className="logo1"><img src="/assets/images/logos/csic.png" alt="logo"/></div>
      </div>
      <div className="user1">
        <div className="picture1"><img src={profile.photo} alt={profile.name}/></div>
        <div className="user_info">
          <div className="name1">
            <h2>{profile.name}</h2><i className="fas fa-chevron-down" />
          </div>
          <div className="mail1">{profile.email}</div>
        </div>
      </div>

      <div className="button1">Redactar</div>
      <Actions/>

      <div className="contacts">
        {chat.map((contact, i) => <ChatContact key={i} photo={contact.photo} name={contact.name} msg={contact.msg} status={contact.status} />)}
      </div>
    </div>;
  }
}