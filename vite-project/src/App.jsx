import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const addUser = () => {
    if (!username.trim() || age <= 0 || isNaN(age)) {
      setMessage('Please enter a valid name and age (non-empty values).');
    } else if (age <= 0) {
      setMessage('Please enter a valid age (>0).');
    } else {
      setMessage(`${username} (${age} years old)`);
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="block">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age (Years)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={addUser} className="add-button">Add User</button>
        </div>
        <div className="block">
          {message ? (
            <div className="message">
              {message}
              <button onClick={clearMessage} className="ok-button">OK</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
