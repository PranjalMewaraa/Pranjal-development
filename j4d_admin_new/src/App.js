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
import JobForm from "./AdminPanel/Pages/JobFlow/JobForm";
import Talent_Lookup from "./AdminPanel/Pages/TalentLookup/Talent_Lookup";
function App() {
   
    return (
        <div className="App">
         <BrowserRouter>
         <Routes>
          <Route path="/" element={""}>
            <Route path="/Dashboard" element={<DashBoard/>}></Route>
            <Route index element={<Page1 />} />
            <Route path="/postjob/basic-info" element={<Page1 />} />
            <Route path="/postjob/add-compensation" element={<Page2 />} />
            <Route path="/postjob/important-info" element={<Page3 />} />
            <Route path="/postjob/finalize" element={<Page4 />} />
            <Route path="/posted-jobs" element={<PostedJobs/>} />
            <Route path="/application" element={<Applications/>}/>
            <Route path="/Lightning" element={<Lightening/>}/>
            <Route path="/Lightening/activate" element={<Lighteningtwo/>}/>
            <Route path="/Lightening/pay" element={<Lg3/>}/>
            <Route path="/PostJob" element={<JobForm/>}></Route>
            <Route path="/talent-lookup" element={<Talent_Lookup/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;