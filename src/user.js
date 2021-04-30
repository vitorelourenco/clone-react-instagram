export default function User({currentUser:{username, imgURL, name}}){
  return (
    <div className="usuario">
      <img alt="" src={imgURL} />
      <div className="texto">
        <strong>{username}</strong>
        {name}
      </div>
    </div>
  )
}