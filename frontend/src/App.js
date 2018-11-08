import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount()  {
    setInterval(this.hello, 250);
  }

  hello = () => {
    fetch('/api/hello')
    .then(response => response.text())
    .then(message => {
      this.setState({message: message});
    });
  }

  render() {
    return (
      <div className="App">
        Welcome to Grafito ! {this.state.message}
      </div>
    );
  }
}

export default App;
