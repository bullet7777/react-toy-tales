import React, { Component } from 'react';

class ToyForm extends Component {

  constructor(){
    super()
      this.state={
        toyName:'',
        toyImage:''
      }
    }
  
  handleToyName=(event) =>{
    this.setState({
      toyName:event.target.value
    })
  }
  handleToyImage=(event) =>{
    this.setState({
      toyImage:event.target.value
    })
  }
  handleSubmit =event =>{
    
    event.preventDefault()
    let newToy={
      
      "name": this.state.toyName,
      "image":this.state.toyImage,
      "likes":0
    }
    this.props.onAdd(newToy)

  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={event=> this.handleSubmit(event)}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.toyName} onChange={event => this.handleToyName(event)}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"  value={this.state.toyImage} onChange={event => this.handleToyImage(event)}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
