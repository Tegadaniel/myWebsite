import HomePage from './components/homePage/HomePage'
import Header from './components/header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage className='homepage pt-5'/>
    </div>
  );
}

export default App;
