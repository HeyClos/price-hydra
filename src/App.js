import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

// The REST API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          PriceHydra, commodity price aggregation and tracking tool.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="wrapper">
        <p>
          Price data to be rendered below.
        </p>
        {posts.length > 0 ? (
          <div className="content">
            {posts.map((post) => (
              <div className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading">Loading... </p>
        )}
      </div>
    </div>
  );
}
export default App;