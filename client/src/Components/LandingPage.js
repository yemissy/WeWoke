import React from 'react';
import { Divider, Button} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import NewPetitionForm from './NewPetitionForm';

export default class LandingPage extends React.Component{
  constructor (props){
    super(props);
    this.state={

    }
    // this.handleContinue = this.handleContinue.bind(this);
    // this.logOut = this.logout.bind(this)
  }

  // handleContinue(){
  //   console.log('I am clicking me')
  //   this.setState({
  //     redirectToGuest:true
  //   })
  // }
// Create a logout function call the function on click on the log out button.
  // logout(e){
  //   const  name= e.target.name;
  //   localStorage.removeItem('token');
  //   this.setState({
  //     redirectToLanding: true
  //   })
  // }

  render(){
    if(this.props.guestRedirect) return (<Redirect to='/guesthome'/>)
    return(
      <div>
        <SignUpForm
          onChange={this.props.onChange}
          values ={this.props.values}
          handleSignup={this.props.handleSignup}
          update={this.props.updPg}
        />
        <Divider vertical> Or </Divider>
        <LoginForm
          onLoginChange={this.props.onLoginChange}
          value ={this.props.value}
          handleLogin ={this.props.handleLogin}/>
          <Button onClick={this.props.handleContinue}>Continue</Button>
        </div>
      )
  }
}
