import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component {

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  componentDidMount() {
    this.getToys()
  }


  getToys = () => {
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          toys: data
        })
      })
  }

  handleOnAdd = (newToy) => {
    console.log(newToy)
   




    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToy)
    }




    fetch("http://localhost:3000/toys", configObject)
      .then(res =>res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          toys:[...this.state.toys,
          data],
          display:false
        })

      })

  }
  handleOnDelete=(id)=>{
    let configObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

  }
  fetch(`http://localhost:3000/toys/${id}`, configObject)
      .then(res =>res.json())
      .then(()=> {
        this.setState({
          toys:this.state.toys.filter((toy)=>toy.id !== id )

        })
          
      })
  }
  increment=(newToy)=>{

    console.log('test')
    newToy.likes=newToy.likes+1

    let configObject = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newToy)
  }




  fetch(`http://localhost:3000/toys/${newToy.id}`, configObject)
  .then(res=>res.json())
      .then( () => {
        
        this.setState({
          toys:this.state.toys.map((toy)=>{
            if(toy.id===newToy.id){
               return newToy
            }
            return toy
          })
        })
          
      })
     
  }

  
  render() {
    return (
      <>
        <Header />
        { this.state.display
          ?
          <ToyForm onAdd={this.handleOnAdd} />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} onDelete={this.handleOnDelete} onLikes={this.increment} />
      </>
    );
  }

}

export default App;
