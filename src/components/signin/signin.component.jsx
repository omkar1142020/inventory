import React from 'react';
import './signin.style.scss'
import FormInput from  '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			email: '',
			password: ''
		}
	}

	handleSubmit = async event =>{
		event.preventDefault();
		const {email,password} = this.state;
		try{
			await auth.signInWithEnailAndPassword(email,password);
			this.setState({email: '', password:''});

		}catch(error){
			console.log(error);
		}
		
	}

	handleChange = event =>{
		const {value, name} = event.target;
		this.setState({[name]: value})
	}

	render(){
		return(
			<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sigin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
					type='email'
					name='email'
					label='Email'
					value={this.state.email}
					onChange={this.handleChange}
					required
					/>

					<FormInput
					type='password'
					name='password'
					label='Password'
					value={this.state.password}
					onChange={this.handleChange}
					required
					/>
					<div className='button'>
					<CustomButton type='submit'>
					Signin
					</CustomButton>
					<CustomButton onClick={ signInWithGoogle } isgooglesignin>
					Sign in with Google
					</CustomButton>
					</div>
				</form>
		</div>
		);

	}
}

export default Signin;