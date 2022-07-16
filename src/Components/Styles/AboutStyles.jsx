import { fontSize } from "@mui/system";

const Aboutstyles=(theme)=>({
content:{
  fontSize:'16px',
  fontWeight:500,
  color:'grey',
  marginTop:'20px !important',
  '& .first-letter':{
        color:'#2196f3',
        fontSize:'200%'
    }
},
heading:{
    fontSize:'30px',
    fontWeight:600,
    fontFamily:'gd-sage,"Times","Times N.w Roman",serif',
    
},
contentWithTyping:{
  fontSize:'20px',
  fontWeight:500,
  color:'grey',
  marginTop:'20px !important',
  display:'flex'
}
})
 
export default Aboutstyles;