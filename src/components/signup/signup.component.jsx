import React from 'react';
import FormInput from  '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';
import { auth ,createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup.style.scss';

class SignUp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			displayName:'',
			email: '',
			password:'',
			confirmpassword:''
		}

	}

	handleSubmit = async (event) =>{
		event.preventDefault();
		const {displayName,email, password, confirmpassword} = this.state;

		if(password !== confirmpassword){
			alert("password dont match");
			return;
		}

		try{
			const { user } = await auth.createUserWithEmailAndPassword(email,password);
			await createUserProfileDocument(user,{displayName});
			this.setState({
				displayName:'',
				email: '',
				password:'',
				confirmpassword:''
			})
		}catch(error){
			console.error(error);
		}
	}

	handleChange = event =>{
		const {value, name} = event.target;
		this.setState({[name]: value})
	}

	render(){
		const {displayName,email, password, confirmpassword} = this.state;
		return(
			<div className='sign-up'>
			<h2>I do not have a account</h2>
			<span>Signup with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
					type='text'
					name='displayName'
					label='displayName'
					value={displayName}
					onChange={this.handleChange}
					required
					/>
					<FormInput
					type='email'
					name='email'
					label='Email'
					value={email}
					onChange={this.handleChange}
					required
					/>
					<FormInput
					type='password'
					name='password'
					label='password'
					value={password}
					onChange={this.handleChange}
					required
					/>
					<FormInput
					type='password'
					name='confirmpassword'
					label='confirmpassword'
					value={confirmpassword}
					onChange={this.handleChange}
					required
					/>
					
					<CustomButton type='submit'>
					Signup
					</CustomButton>
				</form>
		</div>

			)
	}
}

export default SignUp;