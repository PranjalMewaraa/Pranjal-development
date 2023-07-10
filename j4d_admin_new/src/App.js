import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Pages/JobFlow/Components/Header/Header';
<<<<<<< HEAD
import Page1 from './Pages/JobFlow/Page1/Page1'
import NavBar from './Pages/JobFlow/Components/MainNavBar/NavBar';
import PlainInput from './Pages/JobFlow/Components/InputBoxes/Plain/TextFieldPlain';
import ChipButtonGroup from './Pages/JobFlow/Components/InputBoxes/ChipGroup/Chip';
import ChipGroup from './Pages/JobFlow/Components/InputBoxes/ChipGroup/ChipGroup';
import Page2 from './Pages/JobFlow/Page2/Page2';
import TwoThumbSlider from './Pages/JobFlow/Components/InputBoxes/Range/Range';
import Page3 from './Pages/JobFlow/Page3/Page3';
import Page4 from './Pages/JobFlow/page4/Page4'
import DashBoard from './Pages/DashBoard/DashBoard';

=======
import Page3 from './Pages/JobFlow/Page3/Page3'
>>>>>>> parent of e3dbcd0 (Lot of work done)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={''}>
          <Route index element={<DashBoard/>}/>
          <Route path='/postjob/basicInfo' element={<Page1/>} />
          <Route path="/postjob/addCompensations" element={<Page2 />} />
          <Route path="/postjob/importantinfo" element={<Page3 />} />
          <Route path="/postjob/finalize" element={<Page4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
      <Page3/>
>>>>>>> parent of e3dbcd0 (Lot of work done)
    </div>
  );
}

export default App;
