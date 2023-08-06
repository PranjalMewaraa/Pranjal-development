import React from "react";
import TopNavBar from "../../JobFlow/Components/Navbar/TopNavBar";
import NavBar from "../../JobFlow/Components/MainNavBar/NavBar"
import { GrFormPreviousLink } from "react-icons/gr";
import pic from "./pic.jpg";
import './Lighteningpay.scss'

const Lg3 = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontaFmily: 'Poppins',
        }}
        className="lightening"
      >
        <TopNavBar />

        <div
          style={{
            width: "810px",
            height: "600px",

          }}
          className="mainDiv"
        >
          <div
            style={{
              backgroundColor: "white",
              height: "90%",
              padding: "7.5%"
            }}
            className="upper"
          >

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="container">
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#06283D" }} className="title">Location</div>
              <div className="arrow"><GrFormPreviousLink size={27} /></div>
            </div>

            <div style={{ textAlign: "left", color: "#06283D", fontSize: "14px", fontWeight: "590" }}>
              <div>Select where you want your target audience from</div>
              <div style={{ paddingTop: "10px", paddingBottom: "10px" }} className="checkboxarea"><input style={{ width: "20px", height: "20px" }} type="checkbox"></input>Let J4D Select the best location according to job profile</div>
            </div>
            <div style={{ width: "684px", height: "215px", backgroundColor: "grey", paddingTop: "10px" }} className="map">
              <img style={{ width: "502px", height: "200px" }} src={pic} alt="m"></img>
            </div>

            <div style={{ textAlign: "left", paddingTop: "30px", paddingBottom: "10px", display: "flex", flexDirection: "column" }} className="selectCouuntry">
              <div>Select Country</div>
              <div>
                <select style={{ alignContent: "left", width: "290px", height: "44px", fontSize: '20px', fontWeight: "500", border: "1px solid #000000", marginTop: "10px", marginBottom: "10px", borderRadius: "3px" }} id="optionInput">
                  <option style={{}}>India</option>
                  <option >Australia</option>
                  <option >Nepal</option>
                </select>
              </div>

              <div style={{ width: "100%", height: "100px", marginTop: "20px", marginBottom: "20px", border: "1px solid #000000 ", borderRadius: "5px" }} className="estimatedResults">
                <div style={{ paddingLeft: "10px", paddingTop: "5px", paddingBottom: "5px", fontWeight: "700", fontSize: "20px" }} className="heading">
                  Estimated Results

                  <div style={{ borderBottom: "1px solid black", width: "50%", padding: "2px" }} className="bottomBorder">
                  </div>

                  <div style={{ width: "90%", height: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "5px", paddingBottom: "10px" }} className="para">
                    <div className="box1">
                      <span style={{ fontSize: "40px", fontWeight: "600", color: "#06283D" }}>20k</span><span style={{ fontSize: "16px", fontWeight: "600", color: "#000000" }}>IMPRESSIONS</span>
                    </div>
                    <div className="box2">
                      <span style={{ fontSize: "40px", fontWeight: "600", color: "#06283D" }}>12k</span><span style={{ fontSize: "16px", fontWeight: "600", color: "#000000" }}>CLICKS</span>
                    </div>
                    <div className="box3">
                      <span style={{ fontSize: "40px", fontWeight: "600", color: "#06283D" }}>500+</span><span style={{ fontSize: "16px", fontWeight: "600", color: "#000000" }}>APPLICATIONS</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>



          </div>

          <div
            style={{

              height: "15%",
              backgroundColor: "#ECECEC",
              display: "flex",
              flexDirection: "column",

              padding: "5%"

            }}
            className="footer">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
              <div style={{
                fontSize: "52px",
                weight: "500",
                color: "#06283D"
              }}
                className="">
                $6400<span style={{ fontSize: "32px", lineHeight: "43.2px" }}>/Week</span>
              </div>

              <div className="button">
                <button className='primaryButton' id='viewbtn'>Boost</button>
              </div>

            </div>
            <div className="text">
              <div style={{ width: "70%", textAlign: "left", color: "#06283D" }}>
                Your daily budget might fluctuate but the weekly spends will be capped to this budget
              </div>
              <div>

              </div>
            </div>
          </div>





        </div>
      </div>
    </div>

  );
}

export default Lg3;
