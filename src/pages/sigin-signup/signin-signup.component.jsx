import React from 'react';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin-signup.style.scss';

const SiginSignup = () =>(
	<div className='siginsignup'>
	<Signin />
	<SignUp />
	</div>	
	);

export default SiginSignup;