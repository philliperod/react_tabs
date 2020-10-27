import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);

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

  const { company, dates, title, duties } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* {btn container} */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;

// 1) need to setup a fetch function to fetch the data
// 2) create 3 useState hooks: one for loading which default value will bea boolean; one for jobs which default value will be an empty array; last hook will be for a value property which its default value will be zero (because of the array we will fetch and looking for the first item)
// 3) create a fetch function which will fetch the data from the url and parse it in a json and store that data into variable newJobs
// 4) invoke the state function setJobs and access newJobs data in its parameter
// 5) invoke state function setLoading and return it false
// 6) invoke the useEffect hook which will invoke the fetch function and run it once as its dependency is an empty array (prevents memory leaks)
// 7) create a conditional that if the state value loading is true then return a "loading..." to the screen
// 8) create a destructured array which will equal to jobs which uses the state value at its initial value; must be placed after the loading conditional
// 9) structured out your jsx
// 10) for the duties property, you want to iterate over all the prop values by using a map() method
// 11) create another map() method that uses the variable jobs that returns a button which once click it will look for the id and invoke the state function setValue which will output its data associated with that id value
