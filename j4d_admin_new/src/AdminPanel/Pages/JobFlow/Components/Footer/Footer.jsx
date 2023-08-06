import { useNavigate } from "react-router-dom";

const Footer = ({ primary, next, secondary1, secondary2, setFormData, formData }) => {
    const navigate = useNavigate();
  
    return (
      <div className="FooterComp">
        <div className="Fleft">
          <button className="SecondaryButton" onClick={() => navigate(-1)}>{secondary1}</button>
        </div>
        <div className="Fright">
          <button className="SecondaryButton">{secondary2}</button>
          <button className="primaryButton" onClick={() => navigate(next, { state: { setFormData, formData } })}>{primary}</button>
        </div>
      </div>
    );
  };
  
  export default Footer;