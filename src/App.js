import logo from './logo.svg';
import react ,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  const renderpage=()=>{
    if (currentPage==="Home"){
      return(
        <Home />
      )
    }
    else if (currentPage==="About"){
      return(
        <About />
      )
    }
    else if (currentPage==="Portfolio"){
      return(
        <Portfolio />
      )
    }
    else if (currentPage==="Contact"){
      return(
        <Contact />
      )
    }
  }
  return (
    <div id="main">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <h1>{renderpage()}</h1>
      <Footer />
    </div>
  );
}

export default App;
