import Stories from './stories';
import Posts from './posts';
import Sidebar from './sidebar'

import postsList from './data/postsList';
import storiesList from './data/storiesList';
import suggestionsList from './data/suggestionsList';
import currentUser from './data/currentUser';

export default function Corpo(){
  return (
    <div className="corpo">

      <div className="esquerda">
        <Stories storiesList={storiesList}/>
        <Posts postsList={postsList}/>
      </div>

      <Sidebar currentUser={currentUser} suggestionsList={suggestionsList}/>
    </div>
  );
}
