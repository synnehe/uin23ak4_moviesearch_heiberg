import './App.css';
import './css/main.css';
import Header from './components/Header';
import Article from './components/Article';
import Search from './components/Search';

function App() {
  return (
    <body>
      <Header/>
      <main>
        <Search/>
        <Article/>
      </main>
    </body>
  );
}

export default App;
