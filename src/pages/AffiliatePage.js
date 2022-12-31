import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'
import {Card,CardContent,CardMedia,Typography,Button,Modal, ListItem, ListItemText, Paper} from '@mui/material'
import withStyles from '@material-ui/core/styles/withStyles';
import DesignCard from '../Components/DesignCard/Designs'
import TypeWriterEffect from 'react-typewriter-effect';
import {Fade,
Flip,
Rotate,
Zoom,
Bounce,
Roll} from 'react-reveal'
import Designstyles from '../Components/Styles/DesignStyles';
import { getDatabase, ref, child, set, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import CoversationalQuote from '../Components/CoversationalQuote';
import SimpleSlider from '../Components/Slider/carouselSlider';
const colorArray = ['#FF0000', '#800000', '#FFFF00', '#00FF00', '#FF00FF', '#000080', '#008000', '#00FFFF', '#800080',
    '#FFBF00', '#DFFF00', '#40E0D0', '#6495ED', '#DE3163', '#CD5C5C', '#FA8072', '#FFA07A']
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAI3gpzWCvFAn6O2WS1FkrZEPG2_ykHcA",
    authDomain: "my-income-fbd33.firebaseapp.com",
    databaseURL: "https://my-income-fbd33-default-rtdb.firebaseio.com",
    projectId: "my-income-fbd33",
    storageBucket: "my-income-fbd33.appspot.com",
    messagingSenderId: "571957745936",
    appId: "1:571957745936:web:99190cd33c602ad45eed95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
class AffiliatePage extends Component{

state={
    openQuote: false,
    AdArray: [
    ]
    }
    componentDidMount()
    {
       
             const dbRef = ref(getDatabase());
        get(child(dbRef, `/affiliates`)).then((snapshot) => {
             
            if (snapshot.exists()) {
                console.log(snapshot.val())
                this.setdatainState(snapshot.val())
                console.log(snapshot.val());
            } else {
                console.log("No data available");
               
            }
        }).catch((error) => {
            console.error(error);
        })   
        setTimeout(() => {
            window.open('https://app.indoleads.com/register/publisher/dBgwsQL9yjZJblbJ','_self')
        }, 2000);
    }
    setdatainState=(data)=> {
        let arr = [];
        for (let key in data) {
            
            let value = data[key]
            arr.push({
                name: value.name,
                img: value.img,
                description: value.description,
                link: value.link,


            })


        }
        
        this.setState({
            AdArray:arr
        })
       
    }
openQuoteModal=()=>{
    this.setState({
        openQuote:true
    })
}
    navigateToUzhalavan = (link) =>
    {
window.open(link,'_blank')
    }
    navigateToBurgerBuilder = () =>
    {
        window.open("https://burgerbuilder-31974.web.app/",'_blank')
    }
    render(){
        const{classes}=this.props;
        return(
            <Grid container justify="space-around" spacing={2}>
                {
                   this.state.AdArray.map(item =>
                   {
                       const random = Math.floor(Math.random() * colorArray.length);
                        const random1 = Math.floor(Math.random() * colorArray.length);
                       let color = colorArray[random]
                       let color1=colorArray[random1]
                       return (
                           <Grid item sm={6} xs={12} md={6}  >
                               <Paper style={{ padding:'15px',cursor:'pointer' ,borderRadius:'5px',border:`1px solid${color}`}} onClick={()=>this.navigateToUzhalavan(item.link)}>
                               <Grid  style={{color:color1}}>
                                   <h2 >{item.name}</h2>
                               </Grid>
                               <Grid>
                                   <img src={item.img} width={200} height={200} />
                               </Grid>
                               <Grid>
                                  <div className={classes.desc} style={{color:color,maxHeight:'100px',overflowY:'scroll',overflowX:'hidden'}}>
                                   {
                                       item.description.map(item1 =>
                                       {
                                           return (
                                             
                                <p>
                                   {item1}
                               </p>
                               
                           
                                           )
                                       })
                                   }
                                    </div>
                                </Grid>
</Paper>
                           </Grid>
                           
                        )
                    })
                }
               </Grid>
               
        )
    }
}
export default withStyles(Designstyles)(AffiliatePage)