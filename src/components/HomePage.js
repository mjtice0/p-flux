import React from 'react';

function HomePage() {
  return (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Flux, and React Router for ultra-responsive web apps.</p>
    <a href="/about">About</a>
  </div>
  );
}

//traditionally use default but don't have to
//benefit of default is that you need less code to import it
export default HomePage;