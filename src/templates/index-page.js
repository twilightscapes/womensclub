import React from 'react'
import Layout from '../components/Layout-noc'
import Footer from '../components/Footer'
// import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import BgImage from '../components/BgImage'
import Image from '../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'
import Navbar from '../components/Navbar2'
import Contact from '../components/Contact-inc'
import TouchUp from '../components/TouchUp'

// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// import { WiDaySunny } from 'react-icons/wi';

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}




.slider{z-index:-1;}

// .container2 {
// 	overflow-y: scroll;
//   scroll-snap-type: y proximity;
//   height:100vh;
// }

// section {

//   border-bottom:0px solid #777 !important;
// 	overflow-y: scroll;
//   scroll-snap-type: y proximity;
//   height:100vh;

// }

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:100vh;
  height:100%;
  display:block;
  background-size:cover;
  min-height:100vh;
}










.intro:before{
	content: "";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#111; text-shadow: 12px 7px 15px 12px black;
}



.primary p{margin:0 0 .5rem 0 !important; padding:0!important;}

.edu li{margin:2rem 0;}
.todd-headline{margin:0 0 1rem 0;}

h2{color:#dd4000}

.primary{padding:0;}


.outer .container{width:100%; height:auto; margin:0 auto;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:15vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}

.outer{padding:0 11%; border:0px solid red; padding-top:2rem !important;}
.split div:first-child{padding-right:1rem; border:0px solid yellow;}
.split div:last-child{padding-left:1rem; border:0px solid blue;}

@media (min-width: 48rem) and (max-width: 1000px) { 
	
 }


@media (max-width: 48rem) {
.split{flex-direction:row !important; width:100% !important;}

.split div{width:100% !important}
.split div:first-child{order:1}
.split div:last-child{order:2}

.outer{padding:5%; border:0px solid red; }
.split div:first-child{padding-right:0rem; border:0px solid yellow;}
.split div:last-child{padding-left:0rem; border:0px solid blue;}

.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:2}
.split.nowrap div:last-child{order:1}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}




// body.dark, body.dark .container{background-color:#fff !important;}
// body.dark .container, .outer, .intro, .split{background-color:#eee !important;}





}

@media (min-width: 58rem) {
	.outer{padding:0 14%;}
	}




  .image-wrap {
    width: 60%;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  
  .image-wrap img {
    width: 100vw;
    z-index:0;
  }
  
  
  
  
  @media (min-width: 48em) {
  
    .boom1{font-size:380% !important;}
    .boom2{font-size:250% !important;}
    .boom3{font-size:380% !important;}
    .boom4{font-size:280% !important;}
  
  }
  
  @media (max-width: 48em) {
  
    .image-wrap {height:auto !important; min-height:200px !important;}
    
    .intro:before{font-size:150% !important}
    .content{flex-direction:column !important;}
    .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
    .pitch{font-size:250% !important; text-align:center;}
    .split {display:block !important; width:100% !important; }
    .split div{max-width:100% !important; background:tranparent !important;}
    .sidebar{margin:2rem 0;}
    .sidebar .logolink{text-align:center !important;}
  }

  @media (display-mode: standalone) {
    /* All installed PWAs */

  }
    
  @media (hover: hover) {

    section {
      scroll-snap-align: proximity;
      border-bottom:0px solid #777 !important;
      overflow:none;
      height:100%;
    }


    .container2 {
      overflow-y: none;
      scroll-snap-type: proximity;
      height:100%;
    }


  }

.color{max-width:inherit !important; width:inherit !important; height:inherit !important; border:20px solid red !important;}

.hats{width:100% !important; display:block; position:relative; border:0px solid white; padding:0 10vw;}
.hats img{position:absolute !important; right:0 !important; border:0px solid red !important;
 max-width:150px, max-height:150px;}


`





const HomePage = () => (
  <Layout>
   <CustomBox>
  
  

  {/* <div className="logolink" style={{textAlign:'center', background:'#AFE3EA', position:'', top:'8vh', zIndex:'0', width:'100vw', display:'',}}><a title="Logo - Back To Home" href="/" style={{fontSize:'7vw',  textDecoration:'none'}}>
   <div style={{maxWidth:'400px', margin:'0 auto 0 auto'}}><Image className="" alt="Todd Lambert Night photos" filename="womensclub-logo.png" /></div>
</a></div> */}


<Navbar />
<TouchUp />

  
<div className="container intro" style={{position:'', top:'2vh', height:'', display:'', overflowY:'', overflowX:'', background:'transparent'}}>

	
{/*  Panel 1 */}


<section className="child" style={{position:'relative', height:'100vh', paddingTop:'0', overflow:'', display:'none', flexDirection:'column', justifyContent:'center', textAlign:'center'}}>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500}>
<h1 className="logofirst" style={{textAlign:'center', marginTop:'50px', fontSize:'7vw',
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 2px 0 #eee'

}}>
Digital Product Design
</h1>
</ScrollAnimation>

<h3 className="logofirst" style={{textAlign:'center', marginTop:'50px', fontSize:'7vw%',
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 2px 0 #eee',
margin:'-4vh 0 -4vh 0',
textAlign:'center'
}}>
  
</h3>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={600}>
<h4 className="logofirst" style={{textAlign:'center', marginTop:'50px', fontSize:'7vw',
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 2px 0 #eee',


}}>
Conceptual Photography
</h4>
</ScrollAnimation>



  </section>
{/*  Panel 1 */}



{/*  Panel 2 */}

<section className="child" style={{position:'relative', height:'100vh', overflow:'', display:''}}>
<div style={{width:''}}>
  <blockquote style={{padding:'1rem 5vw'}}>

  <h3 className="logotype1" style={{textAlign:'left', margin:'5vh', fontSize:'250%',}}>
Welcome
</h3>

<p>The Women's Club of Gulfport works to support the arts, preserve natural resources, promote education, encourage healthy lifestyles, stress civic involvement, and work toward world peace and understanding.
</p>

<br />
<h4>President's Project for 2020 - 2022:</h4> 
<strong>Focus on Education</strong> 

<h3 className="logotype1" style={{textAlign:'left', margin:'5vh', fontSize:'250%',}}>
Our Mission
</h3>

<p>The Women's Club of Gulfport is a non-profit membership women's organization dedicated to community improvement by enhancing the lives of others through volunteer service. </p>

<p>Our club addresses the emerging needs of our local communities and the nation. We have the ability to tap into the expertise available at national, state and district levels, and the freedom to shape programs to suit particular needs of our local communities. </p>

<p>We provide our members with model programs and projects that encompass the major issues of our time including women's health, preservation of natural resources, literacy, abuse prevention, arts in the community and more. We strive to follow the ideals and goals of the General Federation of Women's Clubs.</p>
  </blockquote>



    
    



</div>



</section>
{/*  Panel 2 */}


















<section className="child" style={{position:'relative', height:'auto', zIndex:'', paddingTop:'',}}>
  <div className="outer" style={{margin:'0 0'}}><Contact /></div> 
 </section>





<section className="child" style={{position:'relative', height:''}}>




</section>

{/* <div className="themer" style={{display:'block', position:'fixed', right:'40px', top:'20px', zIndex:'2'}}><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            
            <input
              type="checkbox" value="None" id="themeSlide" name="themeSlide"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'0',}}><WiDaySunny /></label></div>
        )}
      </ThemeToggler></div> */}


<Footer />

</div>{/* End Container2 */}

</CustomBox>
  </Layout>
)

export default HomePage





