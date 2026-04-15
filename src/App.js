import './App.css';
import Main from './components/main.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';

function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
