import { fontSize } from "@mui/system";

const Designstyles=(theme)=>({
staticHeading:{
    fontSize:'30px !important',
    fontWeight:500,
    fontFamily:'Courier New  monospace', 
    color:'#2196f3',
    marginBottom:'15px !important',
    [theme.breakpoints.down('xs')]: {
      fontSize:'16px !important',
     },
},
customHeading:{
    fontSize:'30px !important',
    fontWeight:500,
    fontFamily:'italic', 
    color:'#1a237e',
    marginTop:'30px !important',
    [theme.breakpoints.down('xs')]: {
      fontSize:'16px !important',
     },
},
ViewDesign:{
  '&:hover':{
    transform: 'scale(1.5)',
    cursor:'pointer'
  }
},
content:{
  fontSize:'16px',
  fontWeight:500,
  color:'grey',
  marginTop:'20px !important'
},Notecontent:{
  fontSize:'16px',
  fontWeight:500,
  color:'#d50000',
  marginTop:'20px !important'
  },
  desc: {
  fontSize:'16px',
  fontWeight:500,
  color:'#d50000',
}
})
 
export default Designstyles;