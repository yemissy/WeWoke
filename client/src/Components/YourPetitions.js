import React from 'react';
import { Button, Icon, Image, Item, Label, Divider } from 'semantic-ui-react';


import SidebarMenu from './SidebarMenu';
import categoryImages from './categoryImages';
import fundraising from '../Images/fundraisingCategory.jpg';
import Campaignimg1 from '../Images/campaigncategory.png';
import supportcategory from '../Images/supportcategory2.jpeg';

export default function YouCreated(props){
  return(
    <div id='yourpetionsscreen'>
      <div id='petitionContainer'>
        <Item.Group>
          {props.yourpetitions.map(thePetition => (
            <Item key={thePetition.id} id={`item${thePetition.id}`} className='itemsItems'>
              <Item.Content>
                <h1 className='petTitile'>Title: {thePetition.title}</h1>
                <div id="coverimg">
                  <img src={fundraising} ></img>
                </div>
                <h1 className='categoriesPet'>{thePetition.category}</h1>
                <Item.Extra>
                  <div id='deleteEdit'>
                    <Button color='red' onClick={props.delete}>Delete</Button>
                    <Button>Edit</Button>
                  </div>
                  <div id='petlabel'>
                    <Label>
                      <Label.Detail>Goal: 3000</Label.Detail>
                    </Label>
                    <Label>
                      <Label.Detail>Signatures: 1000</Label.Detail>
                    </Label>
                    <Label>Share:
                      <Label.Detail>Share: 1000</Label.Detail>
                    </Label>
                  </div>
                  <div id='petitionshare'>
                    <p>Share</p>
                    <Icon link name='twitter' size='large'/>
                    <Icon link name='instagram' size='large'/>
                    <Icon  link name= 'facebook' size= 'large'/>
                  </div>
                </Item.Extra>
                {/* <Divider horizontal></Divider> */}
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>
      <SidebarMenu />
    </div>
  )
}
