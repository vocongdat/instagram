import axios from 'axios';
import { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const openInNewTab = () => {
    window.open(
      `https://api.instagram.com/oauth/authorize?client_id=1824710184696639&redirect_uri=${url}&scope=user_profile,user_media&response_type=code&state=dasdasdasd`,
      'popup',
      'noopener,noreferrer',
    );
  };

  function postJSON() {
    const clientId = '1824710184696639';
    const clientSecret = '5f79522345433d597b2f9db578f3df9f'; // Replace with your actual client secret
    const grantType = 'authorization_code';

    axios
      .post(
        'https://api.instagram.com/oauth/access_token/',
        {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: grantType,
          redirect_uri: url,
          code,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        // Handle the access token response here
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
        // Handle errors here
      });
  }

  return (
    <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <div>
        <span>URL:</span>
        <span>{url}</span>
      </div>
      <div>
        <span>CODE</span>
        <span>{code}</span>
      </div>
      <input type="text" onChange={e => setUrl(e.target.value)} />
      <input type="text" onChange={e => setCode(e.target.value)} />
      <button onClick={openInNewTab}>Get Auth</button>
      <button onClick={postJSON}>Get Token</button>
    </div>
  );
};

export default Home;
