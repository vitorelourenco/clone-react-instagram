import Actions from './actions';
import Likes from './likes'

export default function PostBottom({likes}){
  return (
    <div className="fundo">
      <Actions />
      <Likes likes={likes}/>
    </div>
  );
}
