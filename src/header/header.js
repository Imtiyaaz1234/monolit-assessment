import React, { useState } from "react";
import LogoSlider from "./logo-slider";

// Importing the CSS
import './headerStyles.css';

//images
import monoLogo from '../assets/mono_logo.png';

export const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const link = "#";  

  return (
      <div className="HeaderOuterWrapper">
        <div className="HeaderContainerWrapper">
           <div 
              className="HeaderWrapper"
              style={{
                  backgroundImage: `url(${monoLogo})`
              }}
           >
            <div className="HeaderContainer">
              <p className="HeaderHero">{"Monolith"}</p>
              <h1 className="HeaderText2">{"Use AI software to test less and learn more."}</h1>
              <p className="HeaderText">{"Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run."}</p>
              <div className="HeaderLinksContainer">
              <button 
                    className={`HeaderLink ${activeButton === 'btn1' ? 'active' : 'inactive'}`}
                    onClick={() => setActiveButton('btn1')}>
                    {"Request Demo"}
              </button>
              <button 
                    className={`HeaderLink ${activeButton === 'btn2' ? 'active' : 'inactive'}`}
                    onClick={() => setActiveButton('btn2')}>
                    {"Speak to our team"}
              </button>
             </div>
             <div className="HeaderSlider">
             <LogoSlider /> 
             </div>
             </div>
           </div>
        </div>
      </div>
  );
};
