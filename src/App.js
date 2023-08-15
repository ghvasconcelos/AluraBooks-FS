import './App.css';
import Logo from './components/header/logo'
import Opcoes from './components/header/opcoes';
import IconesHeader from './components/header/icones'


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <Logo/>
          <Opcoes/>
          <IconesHeader/>
      </header>
    </div>
  );  
}

export default App;
