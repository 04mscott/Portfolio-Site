import './App.scss';
import Home from './components/Home'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Mason Scott'
  }, [])
  
  return (
    <>
      <Home />
    </>
  )
}

export default App;
