import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Coming from './components/Coming';
import Games from './components/Games';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Coming />
      <Games />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
