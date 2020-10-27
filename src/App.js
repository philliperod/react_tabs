import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  return <h2>tabs project setup</h2>;
}

export default App;

// 1) need to setup a fetch function to fetch the data
// 2) create 3 useState hooks: one for loading which default value will bea boolean; one for jobs which default value will be an empty array; last hook will be for a value property which its default value will be zero (because of the array we will fetch and looking for the first item)
