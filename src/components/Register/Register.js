import React from 'react';

class  Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn =() => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user) {
        this.props.loadUser(user)
        
        this.props.onRouteChange('home');
      }
    })
  }
  render() {
	return( 
		<article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<main className="pa3 ">
    <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f5 fw4 ph0 mh0 white">Register</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f4 white" htmlFor="Name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover" 
        type="Name" 
        name="Name"  
        id="Name"
        onChange= {this.onNameChange}
        />
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f4 white" htmlFor="Name">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover" 
        type="email" 
        name="email-address"  
        id="email-address"
        onChange= {this.onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw4 lh-copy f4 white" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover" 
        type="password" 
        name="password"
        id="password"
        onChange = {this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div className="">
      <input
      onClick ={this.onSubmitSignIn}
      className="b pa2 input-reset ba bg-transparent hover white ba b--black bg-transparent grow pointer" 
      type="submit" 
      value="Register"/>
      </div>
    </div>
    </main>
    </article>
		);
  }
}

export default Register;