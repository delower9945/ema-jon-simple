import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <img src="{logo}" alt="" />
        <nav></nav>
        <Shop></Shop>
    </div>
  );
}

export default App;
