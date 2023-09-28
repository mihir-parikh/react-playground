import './App.css';
import CustomList from './components/CustomList/CustomList.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Counter from './components/Counter/Counter.tsx';
import ToggleGreeting from './components/ToggleGreeting/ToggleGreeting.tsx';
import ReverseString from './components/ReverseString/ReverseString.tsx';
import GithubUser from './components/GithubUser/GithubUser.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route 
            path="/custom-list" 
            element={<CustomList items={["Item 1", "Item 2", "Item 3"]} />} 
            data-testid="custom-list"
          />
          <Route 
            path="/counter" 
            element={<Counter />} 
            data-testid="counter"
          />
          <Route 
            path="/toggle-greeting" 
            element={<ToggleGreeting />} 
            data-testid="toggle-greeting"
          />
          <Route 
            path="/reverse-string" 
            element={<ReverseString />} 
            data-testid="reverse-string"
          />
          <Route 
            path="/github-user" 
            element={<GithubUser />} 
            data-testid="github-user"
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
