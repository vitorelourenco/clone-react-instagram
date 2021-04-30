export default function PostTop({user: {userName, userImgURL}}){
  return (
    <div className="topo">
      <div className="usuario">
        <img alt="" src={userImgURL} />
        {userName}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
