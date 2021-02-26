import React from 'react'
import "./App.css";



const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://www.ontarioparks.com/images/headers/parks/winter/1200/longpoint.jpg" />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New Post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
