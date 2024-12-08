// Write your code here
import {Component} from 'react'
import './index.css'

import Message from '../Message'
import LogIn from '../Login'
import LogOut from '../Logout'

class Homepage extends Component {
  state = {IsLogin: true}

  onClick = () => {
    this.setState(prev => ({IsLogin: !prev.IsLogin}))
  }

  render() {
    const {IsLogin} = this.state
    return (
      <div className="container">
        <div className="page-container">
          <Message IsLogin={IsLogin} />
          {IsLogin ? (
            <LogIn logIn={this.onClick} />
          ) : (
            <LogOut logout={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}
export default Homepage
