import React from 'react';

export default class Actions extends React.Component {

  render(){

    return <div className="actions1">
      <ul>
        <li className="a1_selected"><i className="fas fa-inbox" />Recibidos <span>9</span></li>
        <li><i className="fas fa-star" />Destacados</li>
        <li><i className="far fa-clock" />Pospuestos</li>
        <li><i className="fas fa-exclamation-circle" />Importantes</li>
        <li><i className="far fa-paper-plane" />Enviados</li>
        <li><i className="far fa-file" />Borradores<span>2</span></li>
      </ul>
    </div>;
  }
}