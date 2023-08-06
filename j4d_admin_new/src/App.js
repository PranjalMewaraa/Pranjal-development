import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page1 from './AdminPanel/Pages/JobFlow/Page1-BasicInfo/Page1'
import Page2 from './AdminPanel/Pages/JobFlow/Page2-AddCOmpensation/Page2'
import Page3 from './AdminPanel/Pages/JobFlow/Page3-ImpInformaton/Page3'
import React, { useState } from 'react';
import Page4 from './AdminPanel/Pages/JobFlow/page4-Finalize/Page4'
import { Applications } from './AdminPanel/Pages/Applications/Applications';
// import JobDetails from './Components/JobdetailPage/Jobdetailpage'

import DashBoard from './AdminPanel/Pages/Dashboard/DashBoard'
import PostedJobs from "./AdminPanel/Pages/Posted_Jobs/PostedJob_Page/Posted_jobs_new";
import Lighteningtwo from "./AdminPanel/Pages/Lightening/lightening_activate/Lightning_activate";
import Lg3 from "./AdminPanel/Pages/Lightening/Lightening_pay/Lightening_pay";
import Lightening from "./AdminPanel/Pages/Lightening/Lightening_Page";
function App() {
    const [updatedObject, setUpdatedObject] = useState({});
  
  const handleUpdateObject = (updatedValues) => {
  
    setUpdatedObject((prevObject) => ({

      ...prevObject,
      ...updatedValues,
    }));
  };
  console.log("inAPP.js"+typeof(handleUpdateObject))
  console.log(''+JSON.stringify(updatedObject, null, 2))
    return (
        <div className="App">
         <BrowserRouter>
         <Routes>
          <Route path="/" element={""}>
            <Route path="/Dashboard" element={<DashBoard/>}></Route>
            <Route index element={<Page1/>} />
            <Route path="/postjob/basic-info" element={<Page1/>} />
            <Route path="/postjob/add-compensation" element={<Page2  />} />
            <Route path="/postjob/important-info" element={<Page3 />} />
            <Route path="/postjob/finalize" element={<Page4 />} />
            <Route path="/posted-jobs" element={<PostedJobs/>} />
            <Route path="/application" element={<Applications/>}/>
            <Route path="/Lightening" element={<Lightening/>}/>
            <Route path="/Lightening/activate" element={<Lighteningtwo/>}/>
            <Route path="/Lightening/pay" element={<Lg3/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;