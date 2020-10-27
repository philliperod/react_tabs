import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  return <h2>tabs project setup</h2>;
}

export default App;

// 1) need to setup a fetch function to fetch the data
// 2) create 3 useState hooks: one for loading which default value will bea boolean; one for jobs which default value will be an empty array; last hook will be for a value property which its default value will be zero (because of the array we will fetch and looking for the first item)
// 3) create a fetch function which will fetch the data from the url and parse it in a json and store that data into variable newJobs
// 4) invoke the state function setJobs and access newJobs data in its parameter
// 5) invoke state function setLoading and return it false
// 6) invoke the useEffect hook which will invoke the fetch function and run it once as its dependency is an empty array (prevents memory leaks)
// 7) create a conditional that if the state value loading is true then return a "loading..." to the screen
