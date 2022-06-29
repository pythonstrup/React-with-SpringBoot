import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { Title } from './MyCss.js';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div>
      <Title>안녕</Title>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<HomePage/>}/>
        <Route path="/login/:id" exact={true} element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
