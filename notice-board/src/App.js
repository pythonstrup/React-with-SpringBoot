import './App.css';
import {Routes, Route} from "react-router-dom"
import ListPage from './pages/ListPage';
import Navigation from './components/Navigation';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<ListPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
