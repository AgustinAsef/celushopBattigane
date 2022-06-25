import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={"hola coder, este es mi item list container pasado por props"}/>
    </>
  );
}

export default App;
