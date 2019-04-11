import React from 'react';
import Actions from './Actions';
import ChatContact from './ChatContact';
export default class LeftMenu extends React.Component {

  render(){
    let lock = "https://loremflickr.com/320/240?lock=";
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

      	<ChatContact photo={lock + 8} name={"María"}/>
      	<ChatContact photo={lock + 9} name={"César"}/>
      	<ChatContact photo={lock + 10} name={"Alfonso"}/>
      	<ChatContact photo={lock + 11} name={"Carlos"}/>
      	<ChatContact photo={lock + 12} name={"Héctor"}/>
      </div>
    </div>;
  }
}