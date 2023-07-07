import Header from "../Components/Header/Header"
import TopNav from "../Components/Navbar/TopNavBar"
import imgHeader1 from "../Assets/vectorP1.png"
import "./Page3.scss"
const Page3 = () =>{
    return(
        <div className="J4D-admin-jobflow3">
            <div className="TopNav"><TopNav/></div>
            <div className="Header">
                <Header
                    Title = "Basic Information"
                    vectorImg = {imgHeader1}
                />
            </div>
            <div className="Sec1"></div>
            <div className="Sec2"></div>
            <div className="Footer"></div>
        </div>
    )
}
export default Page3