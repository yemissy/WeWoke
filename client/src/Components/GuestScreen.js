import React, { Component } from 'react';
import { Divider, Button } from 'semantic-ui-react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


import SidebarMenu from './SidebarMenu';
import PetitionScreen from './PetitionScreen';
import Articles from './Articles';
import SignupModal from './SignupModal';
import NewPetitionForm from './NewPetitionForm';
// import OtherLink from './OtherLink';

async function getPet(){
  const result = await axios.get('/petitions');
  console.log(result.data);
}

 getPet();

class GuestSceen extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Home',
      categories: [
        {
          id: 1,
          type: 'Protest',
          value: 1
        },
        {
          id: 2,
          type: 'Campaign',
          value: 2
        },
        {
          id:3,
          type: 'Support',
          value: 3
        }
      ],
      open: true
    }
    this.validateCreatePetition = this.validateCreatePetition.bind(this)
  }
    validateCreatePetition(currentView){
       currentView = this.props.currentView;
       console.log('I am being called')
      if(currentView === 'memberhome'){
        this.setState({
          open: false,
        })
      }
    }


  render(){
    return(
      <div>
        <SidebarMenu linkActive={this.props.linkActive}/>
        <Articles articles={this.props.thearticles}/>
        <Divider vertical></Divider>
        <PetitionScreen
          categories={this.state.categories}
          petitions={this.props.petitions}
        />
        {(this.props.loggedOut)?
         <SignupModal
          onChange={this.props.onChange}
          onLoginChange={this.props.onLoginChange}
          values={this.props.values}
          handleSignup={this.props.handleSignup}
          handleLogin={this.props.handleLogin}
          value={this.props.value}
          continue={this.props.continue}
          />:
          <NewPetitionForm
          onChange={this.props.onPetitionInfoChange}
          newPetition={this.props.handlePetitionSubmit}
          data={this.props.petitionData}
          />
        }
        {/* <Button /> */}
      </div>
    );
  }
}
export default GuestSceen;
