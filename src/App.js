import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Welcome! 😊 "/>
    </div>
  );
}

export default App;
