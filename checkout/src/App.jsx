import './App.css';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <>
    <h1>Game Web-app</h1>
    <Outlet/>
    </>
  )
}

export default App
