import React from 'react';

export default class EmailList extends React.Component {

  render(){
    let {selectedEmail, emails} = this.props;
    return <div className="col2">
      <div className="col2_top">
        <div className="searchbar"><input type="text" placeholder="Buscar..."/></div>
        <div className="icons">
          <i className="fas fa-sync-alt" />
          <i className="far fa-trash-alt" />
        </div>
      </div>
      <div className="email_list">
        {emails.map((email, index)=> <div key={index} className={ e == selectedEmail ? 'email selected':'email'}>
          <a href="#" onClick={e=>this.props.selectEmail(index)}>
            <div className="email_header">
              <div className="name">{ email.name }</div>
              <div className="date">{ email.date }</div>
            </div>
            <div className="email_main">
              <div className="email_actions">
                <i className="far fa-square" />
                <i className="far fa-star" />
              </div>
              <div className="email_content">
                <div className="issue">{ email.issue }</div>
                <div className="description">{ email.description }</div>
                <div className="documents">
                  <div className="document">
                    <div className="icon" />
                    <div className="name">archivo.ext</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        )}
      </div>
    </div>;
  }
}