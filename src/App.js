import './App.css';
import CustomList from './components/CustomList/CustomList.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/custom-list" element={<CustomList items={["Item 1", "Item 2", "Item 3"]} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
