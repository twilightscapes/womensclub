import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/womensclub-logo.png'
import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp } from 'react-icons/go';
import { WiDaySunny } from 'react-icons/wi';
// import Image from './Image'

import PopContact from './PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'
const CustomBox = styled.div`




}


.header1 {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color:#AFE3EA;
    z-index: 10;
}
#sidebarMenu {
    height: 100%;
    position: fixed;
    z-index:2;
    top:0;
    right: 0;
    width: 250px;
    // margin-top: 60px;
    transform: translateX(250px);
    transition: transform 250ms ease-in-out;
    // background: linear-gradient(180deg, #222 0%, #222 100%);
    // background: linear-gradient(180deg, #AFE3EA 0%, #AFE3EA 100%);

    //   background: rgba(175,225,227,.9);

      background: rgba(55,55,55,.9);


      border-left:1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner{
    margin:60px 0 0 0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li{
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li span{
    display: block;
    font-size: 14px;
    // color: rgba(255, 255, 255, 0.70);
}
.sidebarMenuInner li a{
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}
input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: fixed;
    z-index: 3;
    height: 100%;
    width: 100%;
    top: 22px;
    right: 22px;
    height: 42px;
    width: 42px;
}
.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: #fff;
}
.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -14px;
}

.modal-btn{box-shadow:none;}
.modal-btn:hover{background:#222;}


header [aria-current] { background:none !important;}


@media (max-width: 48em) {

#logo{max-width:250px !important;}
header {text-align:left !important;}

header #logo{margin-left:25vw}

}
`



const Navbar2 = class extends React.Component {
  
/* eslint-disable */

  render() {
    return (
	    
      <CustomBox>         
{/* <Headroom style={{ zIndex: '5', }}></Headroom> */}


<header className="header1" style={{zIndex:'2', position:'', textAlign:'center'}}>
    <Link to="/" className="logolinker1" title="Logo - Back To Home">
    <img id="logo" className="logolinker1" src={logo} alt="Logo" style={{position:'', width:'', maxWidth:'400px', display:'inherit',}} />

    {/* <Image alt="Temp Graphic" filename="ad2inc-logo-round.png" /> */}
   </Link>
</header>

  
 
 
   <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'1px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

   <div id="sidebarMenu">





    <ul className="sidebarMenuInner">
      {/* <li>Todd Lambert <span>Web Developer</span></li> */}

      <li>
              <Link className="navbar-item txtshadow" to="/about/">
                Our History <span>Learn more about us</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/services/">
                Membership <span>How To Join</span>
              </Link>
      </li>


      <li>
      <Link id="portfolio" className="navbar-item txtshadow" to="/portfolio/">Leadership <span>Our current officers</span></Link>
       </li>


       {/* <li>
              <Link id="casestudies" className="navbar-item txtshadow" to="/case-study/">
                How We Do it <span>Go behind the curtains</span>
              </Link>
      </li> */}

    

      <li>
              <Link className="navbar-item txtshadow" to="/blog/">
                What We're Up To <span>View our blog</span>
              </Link>
      </li>

      <li>
             <label className="modal-btn txtshadow" htmlFor="modal-toggle" style={{textShadow: '1px 2px 0px black',}}>Join Today! <span></span></label> 
      </li>

    </ul>

    


    <div className="themer" style={{display:'block', right:'140px', top:'20px'}}><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            
            <input
              type="checkbox" value="None" id="themeSlide" name="themeSlide"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'0',}}><WiDaySunny /></label></div>
        )}
      </ThemeToggler></div>



  </div>
            <PopContact />
            
      
      
   
   
    
      
      
      <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a>
      

</CustomBox>
      
      
    )
  }
}

export default Navbar2