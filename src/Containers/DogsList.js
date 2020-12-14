import React, { Component } from "react";
import DogCard from "../Components/DogCard";


class DogsList extends Component {



  render() {
    let dogs = this.props.data.map(dogObj => <DogCard dog= {dogObj} key={dogObj.id}/>)
    return <div className="list">{dogs}</div>;
  }
}

export default DogsList;
