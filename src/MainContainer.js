import React, { useState } from 'react'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <header>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        {renderPage()}
        <footer>
            Thanks for visiting!
        </footer>
      </div>
    );
  
}
