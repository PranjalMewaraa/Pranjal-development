import logo from './logo.svg';

import './App.scss';
import Header from './Pages/JobFlow/Components/Header/Header';
import Page1 from './Pages/JobFlow/Page1/Page1'
import NavBar from './Pages/JobFlow/Components/MainNavBar/NavBar';
import PlainInput from './Pages/JobFlow/Components/InputBoxes/Plain/TextFieldPlain';
import ChipButtonGroup from './Pages/JobFlow/Components/InputBoxes/ChipGroup/Chip';
import ChipGroup from './Pages/JobFlow/Components/InputBoxes/ChipGroup/ChipGroup';
import Page2 from './Pages/JobFlow/Page2/Page2';
import TwoThumbSlider from './Pages/JobFlow/Components/InputBoxes/Range/Range';
import Page3 from './Pages/JobFlow/Page3/Page3';
import Page4 from './Pages/JobFlow/page4/Page4'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Posted_jobs from './Pages/Posted_Jobs/PostedJob_Page/Posted_jobs';
import PostedJobs from './Pages/Posted_Jobs/PostedJob_Page/Posted_jobs_new';
import { Applications } from './Pages/Applications/Applications';
import { lg } from './Pages/Lightening/Lightening3';

function App() {
  const [updatedObject, setUpdatedObject] = useState({});
  
  const handleUpdateObject = (updatedValues) => {
    debugger;
    setUpdatedObject((prevObject) => ({

      ...prevObject,
      ...updatedValues,
    }));
  };
  console.log("inAPP.js"+typeof(handleUpdateObject))
  console.log(''+JSON.stringify(updatedObject, null, 2))
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""}>
            <Route index element={<Page1 handleUpdateObject={handleUpdateObject} updatedObject={updatedObject}/>} />
            <Route path="/applications" element={<Applications/>} />
            <Route path="/postjob/basicinfo" element={<Page1 handleUpdateObject={handleUpdateObject}/>} />
            <Route path="/postjob/compensation" element={<Page2 handleUpdateObject={handleUpdateObject} />} />
            <Route path="/postjob/importantinfo" element={<Page3 handleUpdateObject={handleUpdateObject} />} />
            <Route path="/postjob/finalize" element={<Page4 />} />
            <Route path="/Jobdetails" element={<PostedJobs />} />
            <Route path="/lightening" element={<lg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
