import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthStore extends Component {
  state = {
    user: {}
  }

  handleUserChange = (user) => {
    this.setState({
      user: user
    })
  }

  isAuthenticated = () => {
    return this.state.user && this.state.user.email;
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          onUserChange: this.handleUserChange,
          isAuthenticated: this.isAuthenticated
        }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const withAuthConsumer = (Component) => {
  return(props) => (
    <AuthContext.Consumer>
      {(storeProps) => (<Component {...props} {...storeProps}/>)}
    </AuthContext.Consumer>
  )
}

export { AuthStore, AuthContext, withAuthConsumer }