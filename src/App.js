import './App.css';
import React, { Component } from 'react'
import Search from './Components/Search';

class App extends Component {
  onSearchImage = search => {
    console.log('App: ' + search )
  }
  render() {
    return (
      <div className='app-container'>
        <Search onSearchImage={this.onSearchImage} />
      </div>
    )
  }
}

export default App

