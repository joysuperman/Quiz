import '../styles/App.css';
import Layout from './layout/layout';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Quiz from './pages/quiz/Quiz';
import Signup from './pages/signup/Signup';
function App() {

  return (
    <Layout>
        <Home/>
        <Signup />
        <Login />
        <Quiz/>
    </Layout>
  )
}

export default App
