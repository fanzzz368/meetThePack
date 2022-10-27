import React from 'react';
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     <Router>
     <Switch>
       <Route path="/chat">
         <h1>I am chatpage</h1>
       </Route>
       <Route path="/">
         <Home></Home>
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
         <TinderCards />
         <SwipeButtons/>
    </div>
  )
}

export default App;

{/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}