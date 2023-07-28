
import "./Lightenin2.scss";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineDown } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TopNav from "../../JobFlow/Components/Navbar/TopNavBar";



function Lighteningtwo(props) {

  const randomTexts = [
    "daily",
    "weekly",
    "monthly",
    "yearly"
  ];
  const options = [
    { value: 'value-1', text: 'Run Continously' },
    { value: 'value-2', text: 'Run Weekly' },
    { value: 'value-3', text: 'Run Monthly' }
  ];
  const [randomText, setRandomText] = useState("daily");
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    setRandomText(randomTexts[randomIndex]);
  };

  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  function decHandler() {
    if(count===0){
      return;
    }
    setCount(count - 1);
  };

  function incHandler() {
    setCount(count + 1);
  };

  const current = new Date();
  const tilldate = new Date();
  tilldate.setDate(current.getDate() + 28);
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const nxtdate = `${tilldate.getDate()}/${tilldate.getMonth() + 1}/${tilldate.getFullYear()}`;
  return (

    <>
      <div className="header">
        <TopNav />
      </div>
      <div className="lightening-two">

        
        <div className='main-div'>

          <div className="number-of-hires-section">

            <div className="hires-sub-section">
              <div>
                <h1 className='page-heading' >Number of Hires</h1>
              </div>
              <div onClick={() => navigate(-1)}>
                <FiArrowLeft className="back-btn" />
              </div>
            </div>

            <h1 className='page-sub-heading'>You can change this number anytime</h1>
            <div className='counter'>
              <div className='counter-left' onClick={decHandler}><AiFillMinusCircle className='counter-left' /></div>
              <div className='counter-mid'>{count}</div>
              <div className='counter-right' onClick={incHandler}><AiFillPlusCircle className='counter-right' /></div>
            </div>

          </div>


          <div className="ad-budget-section">
            <h1 className='page-heading' >Ad Budget</h1>
            <h1 className='page-sub-heading'>This is an approximate budget and real cost may vary</h1>
            <div className="price-section">
              <div className="price-left">₹</div>
              <div className="price-mid"><input className="price-mid-input" type="number" placeholder="50" /></div>
              <div className="price-right" onClick={getRandomText}>{randomText}</div>
            </div>
          </div>

          <div className="duration-section">
            <h1 className='page-heading' >Duration</h1>
            <h1 className='page-sub-heading'>For how long you wish to boost this job post</h1>
            <div className="drop-down-section">
              <select className='selectbox' value="value-2" >
                {options.map(item => {
                  return (<option key={item.value} value={item.value}>{item.text}</option>);
                })}
              </select>
            </div>
            <p className="page-sub-sub-heading">From {date} - {nxtdate}</p>
          </div>

        </div>
        <div className="footer-section">
          <div className="footer-top">
            <div className="footer-text">
              <p className="footerheading"><span className="span-text">₹6,400</span>/Week</p>
              <p className="footersubhead">Your daily budget might fluctuate but the weekly spends will be capped to this budget</p>
            </div>
            <div className="footer-btn" onClick={() => navigate(+1)}>Next <BsArrowRight className="arrow-next" /></div>
          </div>
        </div>
      </div>
    </>



  );
}

export default Lighteningtwo;
