import React from 'react'
import { Component } from 'react';
import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';

export class Maps extends Component {
    constructor(props){
        super(props)
        this.state ={}
    
    }
    render() {        
  return (
    <>
    
    <Map google={this.props.google}
            //style ={{width:"100%",height:"100%"}}
              zoom = {10}
              initialCenter ={this.props.coordinates}>
  </Map>
  
  </>
  )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDEA8m2KfR5oJgioQBrNhRASLQwEERkCDw")
  })(Maps)


