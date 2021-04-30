import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Corpo from './corpo';
import FundoMobile from './fundoMobile';

function App(){
  return (
    <>
      <Navbar />
      <Corpo />
      <FundoMobile />
    </>
  );
}

const root = document.querySelector('.root');
ReactDOM.render(<App />, root);
