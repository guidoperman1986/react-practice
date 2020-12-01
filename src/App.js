import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Guido', age: '34'},
      {name: 'Rata', age: '36'},
      {name: 'Roberto', age: '20'}
    ]
  }

  switchNameHandler = () => {
    //console.log('Clicked')
    //Don't do this this.state.persons[0].name = "Rata";
    this.setState({persons:[
      {name: 'Guido', age: '34'},
      {name: 'Rata', age: '36'},
      {name: 'Roberto', age: '27'}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is working!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>RataBlanca</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, i\'m a React App!!!'));
  }
}

export default App;