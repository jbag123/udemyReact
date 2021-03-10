import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.persons.value);
    console.log(this.props.persons);
    if (nextProps.person === this.props.persons) {
      console.log("[Persons.js] shouldComponentUpdate true");
      return true;
    } else {
      console.log("[Persons.js] shouldComponentUpdate false");
      return false;
    }
  } 

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: 'Shapshot!' };
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    console.log('[Persons.js rendering...');  
    return this.props.persons.map((person, index) => {
      return <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
    })
  }
  };

export default Persons;