import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
