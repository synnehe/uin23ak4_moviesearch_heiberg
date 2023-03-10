import './App.css';
import './css/main.css';
import Header from './components/Header';
import Moviecard from './components/Moviecard';
import Search from './components/Search';

function App() {
  return (
    <body>
      <Header/>
      <main>
        <Search/>
        <Moviecard/>
      </main>
    </body>
  );
}

export default App;
