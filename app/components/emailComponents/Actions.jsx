import React from 'react';

export default class Actions extends React.Component {

	render(){
		
		return <div className="actions1">
        <ul>
          <li className="a1_selected"><i className="fas fa-inbox"></i>Recibidos <span>9</span></li>
          <li><i className="fas fa-star"></i>Destacados</li>
          <li><i className="far fa-clock"></i>Pospuestos</li>
          <li><i className="fas fa-exclamation-circle"></i>Importantes</li>
          <li><i className="far fa-paper-plane"></i>Enviados</li>
          <li><i className="far fa-file"></i>Borradores<span>2</span></li>
        </ul>
      </div>
	}
}