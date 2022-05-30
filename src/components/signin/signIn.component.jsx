import React from 'react'
import FormInput from '../form-input/form-input.component'
import './signIn.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils' 

class Signin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }
    handleSubmit = async event => {
        event.preventDefault() // prevent reload page after submit
        const {email,password} = this.state

        try{
           await auth.signInWithEmailAndPassword(email,password);
           this.setState({email:'',password:''}) // return email and password empty
        }
        catch(error){
            console.log(error)
        }
    }

    handleChange = event =>{
        const {value,name} = event.target // pull value and name that when onChange
        this.setState({[name]:value}) // set the name value that pulled when onChange
    }
    render(){
        
        return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
           
           <form onSubmit={this.handleSubmit}> {/*when submit handleSubmit will work*/}
               <FormInput 
               label='email' 
               handleChange={this.handleChange} // {/*when Change values handleChange will work*/}
               type="email"
               name='email'
               value={this.state.email}
               required />
              
               <FormInput 
                label='password' 
                handleChange={this.handleChange}   //{/*when Change values handleChange will work*/}
                type="password" 
                name='password'
                value={this.state.password}
                required />

                <div className="buttons">
               <CustomButton type="submit" >Sign in</CustomButton>
               <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with google</CustomButton>
                </div>

           </form>
        </div>
      )
        
    }
}

export default Signin
