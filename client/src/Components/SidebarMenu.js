import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../Styling/sideBarmenu.css";

export default function SidebarMenu(props){
  return(
    <div className="sidebar">
      <Icon name="content"/>
      <Menu pointing secondary vertical>
        <Link to ='/guesthome'>
          <Menu.Item name ="Home"/>
        </Link>
        <Link to ='/memberhome' >
          <Menu.Item name ="Activity Feed" />
        </Link>
          <Link to ='/memberpetitions' >
            <Menu.Item name ="Petitions" />
          </Link>
          <Link to ='/orgnization' >
            <Menu.Item name ="Your Organizations"/>
          </Link>
          <Link to ='/Archive'>
            <Menu.Item name ="Archive"/>
          </Link>
          <Link to ='/'></Link>
          <Link to ='/signuprequest'></Link>
      </Menu>
    </div>
  )
}
