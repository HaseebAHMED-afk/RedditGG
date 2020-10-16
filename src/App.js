import React from 'react';
import './App.css';
import FirstDiv from './Components/FirstDiv';
import SecondDiv from './Components/SecondDiv';
import TopNav from './Components/TopNav'
import redditFetch from './Components/redditFetch';

function App() {

  const data = redditFetch();
  console.log(data);
  return (
    <div >
    <TopNav />
    <FirstDiv />
    <SecondDiv />
    </div>

  );
}

export default App;
