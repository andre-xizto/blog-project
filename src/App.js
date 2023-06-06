import MeuHeader from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  <>
    <MeuHeader/>
    <Outlet/>
    </>
  )
}

export default App;
