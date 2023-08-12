import React from "react";
import "./Talent_Lookup.scss";
import TopNav from "../JobFlow/Components/Navbar/TopNavBar";
import Navbar from "../JobFlow/Components/MainNavBar/NavBar";
import Filters from "./Filters";
import { CardTL } from "./Component/cardTL";
import logo from './Component/PP.png'

export default function Talent_Lookup() {
    return (
        <>
            <Navbar />
            <div className="main-div">
                <div className="nav-bar">
                    <TopNav />
                </div>

                <div className="sub-div">

                    <div className="right-section"><Filters/></div>

                    <div className="left-section">
                        <div className="header-section">
                            <div className="heading">
                                <h1 className="page-heading">Talent Lookup</h1>
                                <h1 className="page-sub-heading">
                                    Explore Top Talents for your workforce with our Talent Lookup
                                    Feature
                                </h1>
                            </div>
                            <div className="search-bar">
                                <input type="text" placeholder="Search..."></input>
                            </div>
                        </div>
                        <div className="cards-section">
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />
                            <CardTL
                                logo={logo}
                                name='Pranjal'
                                id='#3405'
                                workStatus='Open to Work'
                                appliedFor='SDE I'
                                Company='Flipkart Inc'
                                appStatus='Pending'
                                location='Bengaluru,IN'
                                dateApplied='15/07/2023'
                            />


                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
}
