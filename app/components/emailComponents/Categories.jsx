import React from 'react';
import Category from './Category';

const CATEGORIES = ["received","highlighted","postponed","important","sent","draft"];

export default class Categories extends React.Component {
  render(){
    return <div className="actions1">
      <ul>
        <Category selected={this.props.state.selectedCategory===CATEGORIES[0]} id={CATEGORIES[0]} title={"Recibidos"} quantity={this.props.state[CATEGORIES[0]].length} icon="fa-inbox" selectCategory={this.props.selectCategory} />
        <Category selected={this.props.state.selectedCategory===CATEGORIES[1]} id={CATEGORIES[1]} title={"Destacados"} quantity={this.props.state[CATEGORIES[1]].length} icon="fa-star" selectCategory={this.props.selectCategory} />
        <Category selected={this.props.state.selectedCategory===CATEGORIES[2]} id={CATEGORIES[2]} title={"Pospuestos"} quantity={this.props.state[CATEGORIES[2]].length} icon="fa-clock" selectCategory={this.props.selectCategory} />
        <Category selected={this.props.state.selectedCategory===CATEGORIES[3]} id={CATEGORIES[3]} title={"Importantes"} quantity={this.props.state[CATEGORIES[3]].length} icon="fa-exclamation-circle" selectCategory={this.props.selectCategory} />
        <Category selected={this.props.state.selectedCategory===CATEGORIES[4]} id={CATEGORIES[4]} title={"Enviados"} quantity={this.props.state[CATEGORIES[4]].length} icon="fa-paper-plane" selectCategory={this.props.selectCategory} />
        <Category selected={this.props.state.selectedCategory===CATEGORIES[5]} id={CATEGORIES[5]} title={"Borradores"} quantity={this.props.state[CATEGORIES[5]].length} icon="fa-file" selectCategory={this.props.selectCategory} />
      </ul>
    </div>;
  }
}