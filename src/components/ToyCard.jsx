import React, { Component } from 'react';

class ToyCard extends Component {

  handleLikes=()=>{
    this.props.onLikes(this.props.toy)

  }

  handleDelete=()=>{
  this.props.onDelete(this.props.toy.id)
  }
 


  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>Like </button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
