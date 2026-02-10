import React, { useState } from 'react';
import AgrarianDigest from './AgarianDigest';
import SMEDigest from './SMEDigest';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('agrarian');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <div className="controls no-print">
        <button 
          onClick={() => setActiveView('agrarian')}
          className={activeView === 'agrarian' ? 'active' : ''}
        >
          Agrarian Digest
        </button>
        <button 
          onClick={() => setActiveView('sme')}
          className={activeView === 'sme' ? 'active' : ''}
        >
          SME Digest
        </button>
        <button onClick={handlePrint} className="print-btn">
          Print / Save as PDF
        </button>
      </div>
      
      <div className="print-container">
        {activeView === 'agrarian' ? <AgrarianDigest /> : <SMEDigest />}
      </div>
    </div>
  );
}

export default App;