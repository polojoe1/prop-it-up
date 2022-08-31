import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Joe" lastName="Coats" age={26} hairColor="Black"/>
      <PersonCard firstName="John" lastName="Doe" age={59} hairColor="Brown"/>
      <PersonCard firstName="Sarah" lastName="Conner" age={38} hairColor="Blonde"/>
      <PersonCard firstName="Hannah" lastName="Gayle" age={22} hairColor="Light-Brown"/>
    </div>
  );
}

export default App;
