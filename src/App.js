import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      });
  };

  return (
    <div>
      <div className="navbar">Github Search</div>
      <div className="search">
        <div className="ui focus input">
          <input type="text" placeholder="Github user..." onChange={handleSearch} />
        </div>
        <button className="ui button" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="card">
        <Card>
          <Image src={avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Header>{userName}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {followers} Followers
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {following} Following
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {repos} Repos
            </a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default App;
