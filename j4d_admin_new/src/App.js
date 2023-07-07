import logo from './logo.svg';

import './App.css';
import Header from './Pages/JobFlow/Components/Header/Header';
import Page1 from './Pages/JobFlow/Page1/Page1'
import NavBar from './Pages/JobFlow/Components/MainNavBar/NavBar';
import PlainInput from './Pages/JobFlow/Components/InputBoxes/Plain/TextFieldPlain';
import ChipButtonGroup from './Pages/JobFlow/Components/InputBoxes/ChipGroup/Chip';
import ChipGroup from './Pages/JobFlow/Components/InputBoxes/ChipGroup/ChipGroup';
import Page2 from './Pages/JobFlow/Page2/Page2';
import TwoThumbSlider from './Pages/JobFlow/Components/InputBoxes/Range/Range';
import Page3 from './Pages/JobFlow/Page3/Page3';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Page2/>
    </div>
  );
}

export default App;
