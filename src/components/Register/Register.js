import React from 'react';

const Register = ({ onRouteChange }) => {
	return( 
		<article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<main className="pa3 ">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f5 fw4 ph0 mh0 white">Register</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f4 white" htmlFor="Name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover" type="Name" name="Name"  id="Name"/>
      </div>
      <div className="mv3">
        <label className="db fw4 lh-copy f4 white" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input
      onClick ={() => onRouteChange('home')}
      className="b pa2 input-reset ba bg-transparent hover white ba b--black bg-transparent grow pointer" 
      type="submit" 
      value="Register"/>
      </div>
  </div>
</main>
</article>
		);
}
export default Register;