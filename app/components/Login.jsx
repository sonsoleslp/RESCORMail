import React from 'react';
import * as LocalStorage from '../vendors/Storage.js';
import profileDefault from '../config/profile';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
    };
    LocalStorage.init(this.props.config.local_storage_key);
  }
  render(){
    let profile = window.profile || profileDefault;
    return (<div className="login">
      <div className="logo"><img src="./assets/images/logos/csic_completo.png" alt="Logotype"/></div>
      <form method="post" action="/mail">
        <h1>Acceso a la pasarela de correo electrónico</h1>
        {this.state.error ? <div className={"error-msg"}>Credenciales incorrectas</div> : null }
        <div className="form-field">
          <label htmlFor="email">E-mail</label>
          <div className="emailWrapper">
            <input type="email" name="email" id="email" value={this.state.username} onChange={e=>this.setState({username:e.target.value})}/><span id="domain">@{profile.domain}</span>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="email">Contraseña</label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>
        </div>
        <button className="button1" type="button" onClick={this.handleSubmit.bind(this)}>Acceder</button>
      </form>
    </div>);
  }
  handleSubmit(){
    let data = JSON.stringify(this.state);
    if(typeof window.checkLoginRESCORMail==="function"){
      if(window.checkLoginRESCORMail(data)){
        //Save in local storage
        LocalStorage.saveSetting("logged","true");
        this.props.login();
      } else {
        this.setState({error:true});
      }
    } else {
      this.setState({error:true});
    }
  }

  componentDidMount(){
    if(LocalStorage.getSetting("logged")==="true"){
      this.props.login();
    }
  }
}