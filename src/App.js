import React, { useState } from 'react';
import './App.css';


function App () {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  return (
    <div>
       <div className="navbar"> Github Search</div>
      </div>
  );
}

export default App;