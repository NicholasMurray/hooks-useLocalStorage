import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './style.css';

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage('storedValue');

  return (
    <div>
      <h1>Local storage hook</h1>
      <h2>Current stored value: {storedValue}</h2>
      <p>Enter a value to save to local storage</p>
      <input
        type="text"
        onChange={(e) => setStoredValue(e.target.value)}
      />
    </div>
  );
}
