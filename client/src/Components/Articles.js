import React from 'react';
import { Item, Divider, Icon, Button} from 'semantic-ui-react';


export default function Articles(props){
  return(
    <div className="articles">
      <h1>Latest Headline News</h1>
      <Item.Group>
        {props.articles.map(article => (
           <Item>
            <Item.Content >
              <Item.Header>Title:{article.title}</Item.Header>
              <Item.Description>{article.story}</Item.Description>
              <Item.Extra>Source:<a>{article.source}</a></Item.Extra>
              <Item.Extra>Writer:{article.writer}</Item.Extra>
              <Item.Meta>
                <Icon name='like'/> 10 likes
                <Button size='tiny' icon='share' content='share' color='blue'/>
                <Button size='tiny' icon='archive' content='archive' />
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  )
}
