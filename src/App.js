import React, { Component } from 'react';
import Profile from './profile/Profile';
import imageInSrc from './imageInSrc.jpeg';

export default class App extends Component {
  handleName(){
    alert("El Hadji Alassane Dieng");
    }
  
  render() {
    return (
      <div className="App">
        <Profile
        text="El Hadji Alassane Dieng"
        title="FullName:"
        onClick={this.handleName}
        />
        <Profile  
        text="Doctor"
        title="bio:"
        onClick={this.handleName}
        />
        <Profile
        text="I am a ethical hacker!"
        title="profession:"
        onClick={this.handleName}
        />
                <img src={imageInSrc} className="App-logo" alt="imageInSrc" />

        
      </div>
    )
  }
}

