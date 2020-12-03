import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/* class App extends Component { */
const app = props => {
    const [ personState, setPersonsState ] = useState({
      persons: [
        {name: 'Guido', age: '34'},
        {name: 'Rata', age: '36'},
        {name: 'Roberto', age: '20'}
      ],
      otherState: 'some other value'
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personState, otherState);

    const switchNameHandler = () => {
      //console.log('Clicked')
      //Don't do this this.state.persons[0].name = "Rata";
      setPersonsState({
        persons:[
          {name: 'Guido Perman', age: '34'},
          {name: 'Rata', age: '36'},
          {name: 'Roberto', age: '27'}
        ],
        otherState: personState.otherState
      });
    }

  
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is working!!!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>RataBlanca</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, i\'m a React App!!!'));
  
}

export default app;



