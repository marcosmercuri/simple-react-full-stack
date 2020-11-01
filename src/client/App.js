import React, { useEffect, useState } from 'react';
import './app.css';
import ReactImage from './react.png';

const App = () => {
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    fetch('/api/getUsername?username=Pepe')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  });

  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <img src={ReactImage} alt="react" />
    </div>
  );
};

export default App;
