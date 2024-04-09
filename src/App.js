import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import SearchResults from './components/SearchResults';
import MovieDetails from './components/MovieDetails';

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Popular />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/search/:searchInput" element={<SearchResults />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  </Router>
)

export default App