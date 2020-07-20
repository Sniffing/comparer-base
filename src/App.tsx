import React from 'react';
import './App.css';
import { NumberDisplay } from './components/number-display/number-display.component';
import { BarDisplay } from './components/bar-display/bar-display.component';

function App() {
  const data = [
    {
      title: 'Ally',
      value: 1.0,
    },
    {
      title: 'CIBC',
      value: 1.15
    },
    {
      title: 'JPMorgan',
      value: 1.10
    },
    {
      title: 'Bank average interest',
      value: 0.09
    }
  ];

  return (
    <div className="App">
      <NumberDisplay
        seconds={1}
        from={0}
        to={100}
      />

      <BarDisplay showNumber={true} data={data}/>

    </div>
  );
}

export default App;
