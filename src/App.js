import './App.css';
import "./components/Navbar/Navbar";
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Card from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Card/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
