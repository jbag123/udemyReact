import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor")
    this.state = {
      persons: [
        { id: "jjj", name: "Jimmy", age:"55" },
        { id: "dddd", name: "Joe", age:"22" },
        { id: "wijoij", name: "Liam", age:"44" }
      ],
      username: 'jbag',
      showName: false,
      showCockpit: true
      }
  }

  static getDerivedStateFromProps (props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
  
  nameChangedHandler= (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    

    this.setState({ persons: persons })
  }

  changeUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showName;
    this.setState({ showName: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if (this.state.showName) {
      person = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      )
    }

    return (
      <div>
      <button onClick={() => {
        this.setState({ showCockpit: false });
      }} >Remove cockpit</button>
      <div className="App">
        {this.state.showCockpit ? (
          <Cockpit 
          clicked={this.togglePersonsHandler} 
          persons={this.state.persons}
        />
        ) : null}
        {person}
      </div>
      </div>
    );
  }
}

export default App;
