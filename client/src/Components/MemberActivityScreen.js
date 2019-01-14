import React, { Component } from 'react';
import { Divider, Image, Button, Item } from 'semantic-ui-react';
// import { createPetitions } from '../Services/petitions';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import profile from '../Images/profilepic1.jpg'
import SidebarMenu from './SidebarMenu';
import Articles from './Articles';
import ActivityFeed from './ActivityFeed';
import NewPetitionForm from './NewPetitionForm';



class MemberActivityScreen extends Component{
  constructor(props){
    super(props);
    this.state ={
      loggedOut: false,
      redirectToLanding: false
    }
    this.logout = this.logout.bind(this);
  }

    logout(e){
      localStorage.removeItem('token');
      console.log('i am being clicked')
      this.setState({
        redirectToLanding: true
      })
    }

  render(){
    if (this.state.redirectToLanding || !localStorage.getItem('token')) {
        return (<Redirect to="/" />)
      }
    return(
      <div>
        <SidebarMenu
          />
        <Item.Image src={profile}  className='profile' avatar/>
        <Articles articles={this.props.thearticles}/>
        <Divider vertical></Divider>
        <ActivityFeed
          petition={this.props.petitions}
          articles={this.props.thearticles}/>
        <NewPetitionForm
          onChange={this.props.onPetitionInfoChange}
          newPetition={this.props.handlePetitionSubmit}
          data={this.props.petitionData}
        />
        <Button size='tiny' id='logout' color='black' onClick={this.logout}>Logout</Button>
      </div>
    )
  }
}
export default MemberActivityScreen;
