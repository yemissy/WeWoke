import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function OtherLink(props){
  return(
    <div>
      <ul>
        <li>
          <Link to='/createpetition'>create petition</Link>  
        </li>
      </ul>
    </div>
  )
}
