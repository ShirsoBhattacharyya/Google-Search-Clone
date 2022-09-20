import './App.css';
import Home from './pages/Home/Home';
import {Routes,Route} from 'react-router-dom';
import SearchResults from './pages/SearchResults/SearchResults';

function App() {
  return (
    <div className="app">
      <Routes>
        {/* The Home Page(the one with the search on) */}
        <Route path='/' element={<Home/>}/>
        {/* The Search Page(the one displaying the search results) */}
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
    </div>
  );
}

export default App;
