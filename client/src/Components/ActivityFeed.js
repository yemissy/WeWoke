import React from 'react';
import { Feed, Icon, Button, Modal, Item, Divider } from 'semantic-ui-react';

import "../Styling/activityFeed.css";

// import CreatePetitionBtn from './CreatePetitionBtn';
import profile from '../Images/profilepic1.jpg'
export default function ActivityFeed(props){
  return(
    <div className="activity">
      <h1>Activity Feed</h1>
      <Feed>
        {props.petition.map(thePetition => (
          <Feed.Event>
            <Feed.Label><img src={profile} /></Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>You</Feed.User> Shared a petition by <Feed.User>{thePetition.Organizers_Name}</Feed.User>
                <Feed.Extra text>
                    <h3>Titled: {thePetition.title}</h3>
                    <h3>Summary: <br></br>{thePetition.detail}</h3>
                </Feed.Extra>
                <Feed.User>You</Feed.User> Liked an article written by{props.articles.writer}
                <Divider horizontal><Icon name='check circle outline' size='massive'/></Divider>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          ))}
      </Feed>
    </div>
  )
}
