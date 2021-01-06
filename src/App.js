import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      {/* <h1>Lets build the linkden clone</h1> */}

      {/* Header */}
      <Header />
          
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Feed */}
          {/* Widgets */}
      </div>

      
    </div>
  );
}

export default App;
