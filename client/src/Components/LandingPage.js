import React from 'react';
import { Divider, Button} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { ReactPlayer } from 'react-player';


import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import NewPetitionForm from './NewPetitionForm';
import Footer from './Footer';

export default class LandingPage extends React.Component{
  constructor (props){
    super(props);
    this.state={

    }
  }

  // <div id='welcomegreeting'>
  //   <h1>Welcome</h1>
  //   <h3>WeWoke</h3>
  //   <h2>Are You Woke ?</h2>
  // </div>
  // <SignUpForm
  //   onChange={this.props.onChange}
  //   values ={this.props.values}
  //   handleSignup={this.props.handleSignup}
  //   update={this.props.updPg}
  // />
  // <Divider vertical> Or </Divider>
  // <LoginForm
  //   onLoginChange={this.props.onLoginChange}
  //   value ={this.props.value}
  //   handleLogin ={this.props.handleLogin}/>
  //   <Button onClick={this.props.handleContinue} id="continueBtn" color='blue'>Continue</Button>


  render(){
    if(this.props.guestRedirect) return (<Redirect to='/guesthome' />)
    if(this.props.memberRedirect) return (<Redirect to='/memberhome' />)
    return(
      <div id='landingpage'>
        <div className='holder'>

        </div>
        <div id='welcomegreeting'>
          <h1>Welcome</h1>
          <h1>WeWoke</h1>
          <h1>Are you Woke ?</h1>
        </div>
        <SignUpForm
          onChange={this.props.onChange}
          values ={this.props.values}
          handleSignup={this.props.handleSignup}
          update={this.props.updPg}
        />
      {/* </div>
      <div className='holder'> */}
        <LoginForm
          onLoginChange={this.props.onLoginChange}
          value ={this.props.value}
          handleLogin ={this.props.handleLogin}/>
          <Button onClick={this.props.handleContinue} id="continueBtn" color='blue'>Continue</Button>
      {/* </div> */}
        <Divider vertical>Or</Divider>
        <div id='opacity'>
        <div className='four'>
          <div className="two">
            <div className="three">
              <div className="one">
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
  }
}
