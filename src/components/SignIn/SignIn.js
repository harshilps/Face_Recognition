import React from 'react';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignIn =() => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data === 'success') {
      this.props.onRouteChange('home')
      }
    })
  }

  render() {
    const {onRouteChange } =this.props;
    return ( 
    <article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <main className="pa3 ">
    <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f1 fw4 ph0 mh0 white">Sign In</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f4 white" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover" 
        type="email" 
        name="email-address"  
        id="email-address"
        onChange= {this.onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw4 lh-copy f4 white" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover" 
        type="password" 
        name="password"  
        id="password"
        onChange= {this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div className="">
      <input
      onClick ={this.onSubmitSignIn}
      className="b pa2 input-reset ba bg-transparent hover white ba b--black bg-transparent grow pointer" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick ={() => onRouteChange('register')}href="#0" className=" white f6 link dim black db pointer">Register</p>
    </div>
  </div>
</main>
</article>
  );
  }
}

export default SignIn;