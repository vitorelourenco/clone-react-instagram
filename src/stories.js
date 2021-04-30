export default function Stories({storiesList}){
  return (
    <div className="stories">
      {storiesList.map(story => StoryJSX(story))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function StoryJSX(props){
  return (
    <div key={props.key} className="story">
      <div className="imagem">
        <img alt="" src={props.imgURL} />
      </div>
      <div className="usuario">
        {props.user}
      </div>
    </div>
  );
}
