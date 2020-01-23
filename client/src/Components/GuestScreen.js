import React, { Component } from 'react';
import { Divider, Button, Modal} from 'semantic-ui-react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "../Styling/guestscreen.css";

import SidebarMenu from './SidebarMenu';
import PetitionScreen from './PetitionScreen';
import Articles from './Articles';
import SignupModal from './SignupModal';
import NewPetitionForm from './NewPetitionForm';
import AccountNeeded from './AccountNeeded';


async function getPet(){
  const result = await axios.get('/petitions');
  console.log(result.data);
}

 getPet();

class GuestSceen extends Component {
  constructor(props){
    super(props);
    this.state ={
      // name:'Home',
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
      ]
    }
  }



  render(){

    return(
      <div className='GuestScreen'>
        <Divider vertical></Divider>
          <div id='guestContainer'>
            <Articles articles={this.props.thearticles}/>
            <PetitionScreen
              categories={this.state.categories}
              petitions={this.props.petitions}
            />
          </div>
        <SidebarMenu linkActive={this.props.linkActive}
          loggedIn={this.props.loggedIn}
          handleLink={this.props.handleCurrentLink}
          isCurrentLink={this.props.currentLink}/>
        {(!this.props.loggedIn) ?
        <div>
          <SignupModal
          onChange={this.props.onChange}
          onLoginChange={this.props.onLoginChange}
          values={this.props.values}
          handleSignup={this.props.handleSignup}
          handleLogin={this.props.handleLogin}
          value={this.props.value}
          />
          <div  id='secauth'>
            <Button className='secauthbtns' color='blue' >Signup</Button>
            <Button className='secauthbtns' color='green'>Login</Button>
          </div>
        </div> :
        <div>
          <Button size='tiny' id='logout' color='black'>Logout</Button>
          <NewPetitionForm
          onChange={this.props.onPetitionInfoChange}
          newPetition={this.props.handlePetitionSubmit}
          data={this.props.petitionData}
          />
        </div>
        }
      </div>
    );
  }
}
export default GuestSceen;
