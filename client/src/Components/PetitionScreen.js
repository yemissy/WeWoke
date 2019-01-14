import React from 'react';
import { Dropdown, Button, Icon, Image, Item, Label } from 'semantic-ui-react';

import profile from '../Images/profilepic1.jpg'
import NewPetitionForm from './NewPetitionForm';

export default function PetitionScreen(props){
  return(
    <div className="petition">
      <Dropdown
        options={props.categories.map(cat => (
        <p key={cat.id}>{cat.type}</p>
      ))}
      clearable
      placeholder="category"
      selection
      />
      {/* <Button content="Create Petition" />
      {props.userLoggedIn ?( <NewPetitionForm />) : alert('Please log in')}
      <NewPetitionForm onActionClick={() => props.userLoggedIn ? alert('please log in'):}/> */}
      <hr></hr>
      <div className="petitionContent">
        <Item.Group divided>
          {props.petitions.map(petition => (
            <Item>
              <Item.Image src={profile}/>
              <Item.Content>
                <Item.Header>Title: {petition.title}</Item.Header>
                <Item.Meta>Organizer: {petition.Organizers_Name}</Item.Meta>
                <Item.Meta>Summary</Item.Meta>
                <Item.Description>{petition.detail}</Item.Description>
                <Button content="Sign Petition" floated="right" color='blue' size='small'/>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>
    </div>
  )
}
