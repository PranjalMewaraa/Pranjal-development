import React from "react";
import TopNav from "../../JobFlow/Components/Navbar/TopNavBar";
import Navbar from "../../JobFlow/Components/MainNavBar/NavBar";
import pic from "./pic.jpg";
import "./Lighteningpay.scss";
import { FiArrowLeft } from "react-icons/fi";

const options = [
  { value: 'value-1', text: 'India' },
  { value: 'value-2', text: 'Australia' },
  { value: 'value-3', text: 'Nepal' }
];

const Lg3 = () => {
  return (
    <div>
      <Navbar />
      <div className="LighteningPage">
        <TopNav />
        <div className="lightening-two">
          <div className="main-div">
            <div className="number-of-hires-section">
              <div className="hires-sub-section">
                <div>
                  <h1 className="page-heading">Location</h1>
                  
                </div>

                <div>
                <FiArrowLeft className="back-btn" />
              </div>

              </div>

              <h1 className='page-sub-heading'>Select where you want your target audience from</h1>
              <h1 className='page-sub-heading'><input type="checkbox"></input>Let j4d select your location according to your job profile </h1>
              <div className="map">
              <img  src={pic} alt="m"></img>

              <h1 className='page-sub-heading'>Select Country</h1>
              
              <div className="duration-section">
              <div className="drop-down-section">
              <select className='selectbox' value="value-2" >
                {options.map(item => {
                  return (<option key={item.value} value={item.value}>{item.text}</option>);
                })}
              </select>
            </div>
              </div>
             

            <div className="estimated">
              
               <div className="topic">
               Estimated results
               </div>

               <div className="border">
               
               </div>

               <div className="bottom">
               
               <div className="element">
               <span className="min">20k</span><span className="max">IMPRESSIONS</span>
               </div>

               <div className="element">
               <span className="min">12k</span><span className="max">CLICKS</span>
               </div>

               <div className="element">
               <span className="min">500+</span><span className="max">APPLICATIONS</span>
               </div>

               </div>
            
            </div>

             
            

            </div>

            </div>
            

          </div>
          <div className="footer-section">
            <div className="footer-top">
              <div className="footer-text">
                <p className="footerheading">
                  <span className="span-text">₹6,400</span>/Week
                </p>
                <p className="footersubhead">
                  Your daily budget might fluctuate but the weekly spends will
                  be capped to this budget
                </p>
              </div>
              <div className="footer-btn">Boost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lg3;

