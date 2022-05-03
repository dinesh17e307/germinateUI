import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from './pages/About'
import WebsiteDesign from'./pages/Desgins'
import Request from "./pages/Request";
import {Card,CardContent,CardMedia,Typography,Button} from '@mui/material'
import { Hidden,Grid } from "@material-ui/core";
import AppDrawer from './Components/AppDrawer'
import ShareSocialMedia from "./Components/Slider/ShareOption";
import ShareOption from "./Components/Slider/ShareOption";
function App() {
  return (
    <div div className='page-container'>
      <div className='App-header'>
        <div style={{flex:2}}>
          <img className="logo"src='/images/logo1.png' width={200} />
          
        </div>
        <Hidden smDown>
        <div className='linkHeader' style={{flex:3,display:'flex',justifyContent:'space-evenly'}}>
             <p ><a className='touchlink' href="/">Home</a></p>
              <p><a href="/design" className='touchlink'>Website Designs</a></p>
             <div className='container'>
             <p><a href="/request" className='touchlink'>Request your desire</a></p>
            <marquee  direction = "left"  style={{fontSize:'12px',fontWeight:600,color:'#8142af'}}>get your Quote</marquee>
             </div>
            <p> <a href="/about" className='touchlink'>About us</a></p>
        </div>
         </Hidden>
         <Hidden mdUp>
           <AppDrawer/>
         </Hidden>
      </div>
     
     <div className='wrap-content'>
       
       <Router>
         <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/home" element={<Home/>}/>
         <Route  path="/design" element={<WebsiteDesign/>}/>
         <Route exact path="/request" element={<Request/>}/>
         <Route  path="/about" element={<About/>}/>
         
         </Routes>
         </Router>
        
     </div>
     <div style={{minHeight:'300px',backgroundColor:'rgb(12 12 12)',overflow:'hidden',marginBottom:'20px'}}>
       <Grid item > <img style={{marginTop:'-55px'}}src='/images/logo1.png' width={200} /></Grid>
      <Grid container style={{display:'flex',justifyContent:'space-around',color:'white',marginTop:'-55px'}}>
        <Grid item lg={2} sm={6} xs={12} md={4} >
        <p  className="Grid1" ><a className="touchlinkfooter" href="/">Home</a></p>
        <p className="Grid1"><a className="touchlinkfooter" href="/design">WebsiteDesign</a></p>
        <p  className="Grid1"><a className="touchlinkfooter" href="/request">Request your desire</a></p>
        <p  className="Grid1"><a className="touchlinkfooter" href="/about">About us</a></p>
        </Grid>
<Grid item lg={6} sm={6} xs={12} md={4}>
 To give a Quality of products to customer , being a small startup quality will sounds 
</Grid>
<Grid item lg={4} sm={6} xs={12} md={4}>
 <ShareOption/>
</Grid>
      </Grid>
      <p style={{color:'white',fontWeight:500,textAlign:'center'}}>@teamgerminate-2022</p>
  </div>
   
    </div>
  );
}

export default App;
