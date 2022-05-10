
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar'
import Card from './components/card';


function App() {
  return (
    <div className="App">
      <header >
<Navbar />
      </header>
      <main>
        <Card />
      </main>
      <footer></footer>

    </div>
  );
}

export default App;
