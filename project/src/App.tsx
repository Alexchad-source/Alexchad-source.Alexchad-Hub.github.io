import React from 'react';
import { MatrixBackground } from './components/MatrixBackground';
import { HubInterface } from './components/HubInterface';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixBackground />
      <HubInterface />
    </div>
  );
}

export default App;