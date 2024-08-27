import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState('sum');
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const response = await axios.post(`http://62.0.137.141:3001/${operation}`, {
        a,
        b,
      });
      setResult(response.data.result);
      return response.data.result;
    } catch (error) {
      console.error('Error subtracting numbers:', error);
      throw error; // Re-throw the error to be handled by the caller if necessary
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter first number"
        style={{ marginRight: '10px' }}
        automation-id="first_number"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter second number"
        style={{ marginRight: '10px' }}
        automation-id="second_number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)} style={{ marginRight: '10px' }} automation-id="operation-select">
        <option value="sum">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <button onClick={calculate} automation-id="button_calculator">Calculate</button>
      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2 automation-id="results">Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
