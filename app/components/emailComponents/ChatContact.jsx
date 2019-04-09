import React from 'react';

export default class ChatContact extends React.Component {

	render(){
		return <div className="contact">
          <div className="picture2"><img src={this.props.photo} alt={this.props.name}/></div>
          <div className="contact_info">
            <div className="name2">{this.props.name}<span className="offline"></span></div>
            <div className="mail2">Bla b la bla bla ...</div>
          </div>
        </div>
	}
}