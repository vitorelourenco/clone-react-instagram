export default function Likes({likes: {byText, byImgURL, likesCount}}){
  return(
    <div className="curtidas">
      <img alt="" src={byImgURL} />
      <div className="texto">
        Curtido por <strong>{byText}</strong> e <strong>{likesCount}</strong>
      </div>
    </div>
  )
}
