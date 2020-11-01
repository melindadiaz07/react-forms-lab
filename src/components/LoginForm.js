import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    return (this.state.username && this.state.password) ?
    this.props.handleLogin(this.state.username, this.state.password) :
    null
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input value={this.state.username} 
                  id="username" 
                  name="username" 
                  type="text" 
                  onChange={(event) => this.handleInput(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} 
                  id="password" 
                  name="password" 
                  type="password" 
                  onChange={(event) => this.handleInput(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
