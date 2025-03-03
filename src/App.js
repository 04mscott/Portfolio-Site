import './App.scss';
import { Routes, Route } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}
      </Route>
    </Routes>
    </>
  )
}

export default App;
