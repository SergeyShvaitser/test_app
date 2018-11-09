import React, { Component } from 'react'

class Dashboard extends Component {

  constructor(){
    super()
    this.addNewAccount = this.addNewAccount.bind(this)
  }

  addNewAccount(){
    console.log('new acc')
  }

  render(){
    return (
      <div>
        Dashboard
      </div>
    )
  }

}

export default Dashboard
