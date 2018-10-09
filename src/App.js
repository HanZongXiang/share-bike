import React, { Component } from 'react'
import './stylesheets/index.less'

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default App;
