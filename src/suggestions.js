export default function Suggestions({suggestionsList}){
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestionsList.map(suggestion => SuggestionJSX(suggestion))}
    </div>
  );
}

function SuggestionJSX({username, imgURL, motive, key}){
  return (
    <div key={key} className="sugestao">
      <div className="usuario">
        <img alt="" src={imgURL} />
        <div className="texto">
          <div className="nome">{username}</div>
          <div className="razao">{motive}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}