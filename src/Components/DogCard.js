import React from "react";

class DogCard extends React.Component {

  state = {
    beenClicked: false
  }

  barkHandler = () => this.setState((prevState => ({beenClicked: !prevState.beenClicked})))

  

  render() {

    return (
    <div className="card">
      <span className="content">
        <h2 >{this.props.dog.name}</h2>
        <img alt={this.props.dog.name} src={this.props.dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.barkHandler}>Bark</button>
        <h2>{this.state.beenClicked ? "Bark": null}</h2>
      </span>
    </div>
    )
  }
  
}

export default DogCard;
