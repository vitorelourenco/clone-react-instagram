import PostContent from './post-content';
import PostTop from './post-top';
import PostBottom from './post-bottom';

export default function Posts({postsList}){
  return (
    <div className="posts">
      {postsList.map(postObj => PostJSX(postObj))}
    </div>
  );
}

function PostJSX({user, contentImgURL, likes, key}){
  return (
    <div key={key} className="post">
      <PostTop user={user}/>
      <PostContent contentImgURL={contentImgURL} />
      <PostBottom likes={likes} />
    </div>
  );
}

