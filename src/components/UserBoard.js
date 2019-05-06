import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  render() {
    return(
   
    <div>
        <h3>{ this.props.content }</h3>
        <div>
            <User name="Alice"/>
            <User name="Henk"/>
            <User name="Scotty"/> 
        </div>
        
    </div>
      
    )
    
  }
}



