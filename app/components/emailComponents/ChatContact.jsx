import React from 'react';

export default class ChatContact extends React.Component {

  render(){
    return <div className="contact">
      <div className="picture2"><img src={this.props.photo} alt={this.props.name}/></div>
      <div className="contact_info">
        <div className="name2"><span>{this.props.name}</span><span className={this.props.status || "offline"} /></div>
        <div className="mail2">{this.props.msg}</div>
      </div>
    </div>;
  }
}