import React from 'react';
import './App.css';
import FirstDiv from './Components/FirstDiv';
import SecondDiv from './Components/SecondDiv';
import TopNav from './Components/TopNav'
import redditFetch from './Components/redditFetch';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from './Components/PostPage';
function App() {

  const data = redditFetch();
  console.log(data);
  return (
    <div >
    <Router>
    <TopNav />
      <Routes>
        <Route path='/' element={<FirstDiv />}>
          <Route path='/' element={<SecondDiv />} />
        </Route>
        <Route path=":id" element={<PostPage />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
