import './App.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Components/Loading/Loading';
import ContactMe from './Pages/ContactMe';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import About from './Components/About';
import MyProject from './Components/MyProject';
import Main from './Components/Main';
import { useState, useEffect } from 'react';
import Certificates from './Components/Certificates';


function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animations run only once
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* Show Navbar after loading */}
            <Navbar />
            <Routes>
              {/* Home Page with HeroSection, AboutSection, and Footer */}
              <Route
                path="/"
                element={
                  <>
                    <Main />
                    <About />
                    <Skills />
                    <MyProject />
                   <Certificates />
                  </>
                }
              />
              {/* Other Pages */}
              <Route path="/contactme" element={<ContactMe />} />
              
              
            </Routes>
            {/* Footer for all pages, only shows after loading */}
            <Footer/>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
