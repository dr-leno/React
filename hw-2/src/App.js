import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Stepan',
      age: 25,
      isVisible: false,
      buttonText: 'Show'
    };
  }
  updateState = () => {
    const { name, age } = this.state;
    const updatedName = name === 'Stepan' ? 'Mykola' : 'Stepan';
    const updatedAge = age === 25 ? 30 : 25;

    this.setState((prevState) => ({
      name: prevState.isVisible ? updatedName : prevState.name,
      age: prevState.isVisible ? updatedAge: prevState.age,
      isVisible: !prevState.isVisible,
      buttonText: prevState.isVisible ? 'Show' : 'Hide',
    }));
    console.log('state', this.state);
  }
  render() {
    return (
          <div>
	            {this.state.isVisible && (<p>Name: {this.state.name}, age: {this.state.age}</p>)}
              <button onClick={this.updateState}>{this.state.buttonText}</button>
          </div>
        );
  }
}

export default App;
