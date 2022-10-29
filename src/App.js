import './App.css';
import { ApiProvider } from './context/ApiContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <ApiProvider>
      <main>
       <Home/>
      </main>
    </ApiProvider>
  );
}

export default App;
