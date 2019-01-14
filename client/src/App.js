import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { newMember, getMember } from './Services/member';
import { generalGet } from './Services/petitions';
import { getArticles } from './Services/articles';
import { logIn } from './Services/auth';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { createPetitions } from './Services/petitions';


import LandingPage from './Components/LandingPage';
import GuestScreen from './Components/GuestScreen';
import MemberActivityScreen  from './Components/MemberActivityScreen'
import NewPetitionForm from './Components/NewPetitionForm';


console.log(getMember());
async function getMembers(){
  const result = await axios.get('/members');
  console.log(result.data);
}

 getMembers();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      petitions: [],
      createAccount: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        number: '',
        organizationName: ''
      },
      login: {
          email: '',
          password: ''
      },
      loggedIn: false,
      redirectToMember: false,
      redirectToGuest: false,
      petitionData: {
        title: '',
        category:'',
        detail: '',
        Organizers_Name: '',
        summary: ''
      }
    }
    this.onAcctCreateInputChange = this.onAcctCreateInputChange.bind(this);
    this.onLoginInputChange = this.onLoginInputChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handlePetitionSubmit = this.handlePetitionSubmit.bind(this);
    this.onPetitionInfoChange = this.onPetitionInfoChange.bind(this);
  }
  onAcctCreateInputChange(e){
    const {name, value} = e.target;
    this.setState(prevState => ({
      createAccount: {
        ...prevState.createAccount,
        [name]: value,
      }
    }))
  }

  onLoginInputChange(e){
    const {name, value} = e.target;
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: value,
      }
    }))
  }

  // Create function for to post new user
  async handleSignup(){
      const newMembers = await newMember(this.state.createAccount);
      console.log(newMembers);
    }

  async handleLogin(){
    const data = await logIn(this.state.login)
    console.log(data);
    localStorage.setItem('token', data.jwt);
    this.setState({
      loggedIn: true,
      redirectToMember:true,
      login: {
        password:data
      }
    })
  }

  async componentDidMount(){
    await this.getPetitions();
    await this.getArticle();
  }

  async getPetitions(){
    const result = await generalGet();
    console.log(result);
    this.setState({
      petitions:result
    })
  }

  async getArticle(){
    const articles = await getArticles();
    console.log(articles);
    this.setState({
      articles:articles
    })
  }
// Continue button. Updates redirect to guesthome,
// call function on continue button and then conditionally check if redirect to guest is true then return redirect
  handleContinue(){
    console.log('I am clicking me')
    this.setState({
      redirectToGuest:true
    })
  }

  onPetitionInfoChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      petitionData: {
        ...prevState.petitionData,
        [name]: value
      }
    }))
  }

  async handlePetitionSubmit(){
    const newPetition = await createPetitions(this.state.petitionData);
    console.log(newPetition);
    console.log('I am getting called')
  }

  render() {
    return (
      <Router >
        <div className="App">
            <Route exact path='/' render={()=> <LandingPage
              onChange={this.onAcctCreateInputChange}
              onLoginChange={this.onLoginInputChange}
              handleSignup = {this.handleSignup}
              values ={this.state.createAccount}
              value ={this.state.login}
              handleLogin ={this.handleLogin}
              guestRedirect={this.state.redirectToGuest}
              memberRedirect={this.state.redirectToMember}
              handleContinue={this.handleContinue}/> }
            />
            <Route  path='/guesthome' render ={()=> <GuestScreen
              thearticles= {this.state.articles}
              petitions={this.state.petitions}
              linkActive={this.state.active}
              onChange={this.onAcctCreateInputChange}
              onLoginChange={this.onLoginInputChange}
              handleSignup = {this.handleSignup}
              values ={this.state.createAccount}
              value ={this.state.login}
              handleLogin ={this.handleLogin}
              onPetitionInfoChange={this.onPetitionInfoChange}
              handlePetitionSubmit={this.handlePetitionSubmit}
              petitionData={this.state.petitionData}
              loggedIn={this.state.loggedIn}
              /> }
            />
            <Route path='/memberhome' render ={()=> <MemberActivityScreen
              thearticles= {this.state.articles}
              petitions={this.state.petitions}
              loggedIn ={this.state.loggedIn}
              onPetitionInfoChange={this.onPetitionInfoChange}
              handlePetitionSubmit={this.handlePetitionSubmit}
              petitionData={this.state.petitionData}/> }
            />

        </div>

      </Router>
    );
  }
}

export default App;
