import './App.css';
import { Header } from './header/header';
import { Calculator } from './calculator/calculator';
import { TopBar } from './calculator/top-bar/top-bar';

function App() {
  return (
    <div className="App">
        <Header />
        <TopBar />
        <Calculator />
    </div>
  );
}

export default App;
