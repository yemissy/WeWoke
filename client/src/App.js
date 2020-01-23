import React, { Component } from 'react';
import './Styling/App.css';
import axios from 'axios';


import { newMember, getMember } from './Services/member';
import { generalGet } from './Services/petitions';
import { getArticles } from './Services/articles';
import { logIn } from './Services/auth';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { createPetitions } from './Services/petitions';
import { getMyPetitions, deletepetition} from './Services/petitions';


import LandingPage from './Components/LandingPage';
import GuestScreen from './Components/GuestScreen';
import MemberActivityScreen  from './Components/MemberActivityScreen'
import NewPetitionForm from './Components/NewPetitionForm';
import YouCreated from './Components/YourPetitions';
import AccountNeeded from './Components/AccountNeeded';
import Footer from './Components/Footer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      coverimgs: [
        {url: './Images/campaigncategory.png'},
        {url: './Images/fundraisingCategory.jpg'},
        {url: './Images/supportcategory2.jpeg'}
      ],
      articles: [],
      petitions: [],
      memberpetitions:[],
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
    this.deleteThisPetition = this.deleteThisPetition.bind(this);
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
    await this.myPetitions();
  }

  async componentDidMount(){
    await this.getPetitions();
    await this.getArticle();
    await this.deleteThisPetition();
  }

  async getPetitions(){
    const result = await generalGet();
    console.log(result);
    this.setState({
      petitions:result
    })
  }
  async myPetitions(){
    const result = await getMyPetitions();
    console.log(result);
    this.setState({
      memberpetitions: result
    })
  }

  async deleteThisPetition(){
    console.log('i am clickable')
    const deleted = await deletepetition(this.state.memberpetitions);
    console.log(deleted);
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
              handleContinue={this.handleContinue}
              loggedIn={this.state.loggedIn}/> }
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
              memberRedirect={this.state.redirectToMember}
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
            <Route path='/signuprequest' component ={AccountNeeded}/>
            <Route path='/memberpetitions' render={() => <YouCreated
             yourpetitions={this.state.memberpetitions}
             delete={this.deleteThisPetition}/>}
            />
            <Footer/>
        </div>

      </Router>
    );
  }
}

export default App;
