import './App.css';
import Menu from './component/menu/Menu';
import Home from './component/home/Home';

function App() {
  return (
    <div className="app">
      <div className="appHeader">
        <Menu/>
      </div>
      <div className="appContent">
        <Home/>
      </div>
    </div>
  );
}

export default App;
