import Suggestions from './suggestions';
import User from './user';

export default function Sidebar({suggestionsList, currentUser}){
  return(
    <div className="sidebar">
      <User currentUser={currentUser} />
      <Suggestions suggestionsList={suggestionsList}/>
      <Links />
      <Copyright />
    </div>
  );
}

function Links(){
  return(
    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Copyright(){
  return (
    <div className="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  );
}
