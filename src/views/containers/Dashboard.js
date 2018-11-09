import React, { Component } from 'react'
import AccountForm from 'views/components/dashboard/AccountForm'
import AccountsList from 'views/components/dashboard/AccountsList'

class Dashboard extends Component {

  constructor(){
    super()
    this.state = {
      newAccount: {},
      accounts: []
    }
    this.addNewAccount = this.addNewAccount.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.removeAccount = this.removeAccount.bind(this)
  }

  handleFieldChange(e, name) {
    this.setState({newAccount: {...this.state.newAccount, [name]: e.target.value}});
  }

  addNewAccount(){
    this.setState({
      accounts: [...this.state.accounts, this.state.newAccount],
      newAccount: {}
    })
    document.getElementById("account-form").reset()
  }

  removeAccount(id){

    this.setState({
      accounts: this.state.accounts.filter((account) => {
        console.log(account.accountId);
        console.log(id);
        return account.accountId !== id
      })
    })
  }

  render(){
    return (
      <div>
        <h1>Accounts Dashboard</h1>
        <div id="dashboard-wrapper">
          <AccountForm
            addNewAccount={this.addNewAccount}
            onFieldChange={this.handleFieldChange}
            accData={this.state.newAccount}
          />
          <AccountsList accounts={this.state.accounts} removeAccount={this.removeAccount} />
        </div>
      </div>
    )
  }

}

export default Dashboard
