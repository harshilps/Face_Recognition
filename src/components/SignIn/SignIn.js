import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return( 
		<article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<main className="pa3 ">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw4 ph0 mh0 white">Sign In</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f4 white" for="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw4 lh-copy f4 white" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick ={onRouteChange}
      className="b pa2 input-reset ba bg-transparent hover white ba b--black bg-transparent grow pointer" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className=" white f6 link dim black db">Register</a>
    </div>
  </form>
</main>
</article>
		);
}
export default SignIn;