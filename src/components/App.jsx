import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Layout from './layout/layout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';
import Signup from './pages/signup/Signup';

import {AuthProvider} from '../contexts/AuthContexts'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;