import './App.css';
import React, { Component } from 'react'
import Search from './Components/Search';
import axios from "axios"
import ImageList from './Components/Image';

class App extends Component {
  state=
  {
    images:[]
  };

  onSearchImage = async(search) => {
    console.log('App: ' + search );
    const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query : search
      },
      headers:{
        Authorization: 'Client-ID qYKV2Rc-v0EuUgNXhYa-DwGLw0pZUy0dcsJvaGsd8Mw'
      }
    })
      // console.log(result.data.result);
      this.setState({
        images:result.data.results
      });
  }
  render() {
    return (
      <div className='app-container'>
        <Search onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App

