import './App.css';
import "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import BookCard from './components/Card/Card';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Main/>
      <BookCard/>
      <Footer/> */}
      <AppRouter/>
    </div>
  );
}

export default App;
