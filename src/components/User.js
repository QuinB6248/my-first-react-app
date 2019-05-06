import React, { Component } from 'react'



export default class User extends Component {
state = { present: true }

toggle = () => {
  this.setState({
    present: !this.state.present
  })
}

  render() {
    return <main>
      <div>
        <p>
          User: 
          <b>{this.props.name}</b>
          <p>{this.props.name} is <b>{ this.state.present ? '' : 'not' } present</b></p>
        </p>
        <button onClick={this.toggle}>Toggle</button>
      </div> 
    </main>
    
    


  }
}