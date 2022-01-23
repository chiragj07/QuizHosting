import './App.css';
import {Route, Routes,BrowserRouter as Router} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage';
import QuizPage from './Pages/Quiz/QuizPage'
import ResultPage from './Pages/ResultPage/ResultPage';
import { Navbar } from './Components/Navbar/Navbar';
function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<HomePage  />} />
      <Route  path ={'/quiz'} element= {<QuizPage />} />
      <Route path={'/result'} element={< ResultPage />} />

    </Routes>
    </Router>
    </>
  );
}

export default App;
