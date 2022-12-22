import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './style.css';

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage('storedValue');

  return (
    <div>
      <h1>Local storage hook</h1>
      <p>Save a string to local storage</p>
      <p>Stored value: {storedValue}</p>
      <input
        type="text"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      />
    </div>
  );
}
