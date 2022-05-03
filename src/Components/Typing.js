import React, { Component } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
class Typing extends Component{
    typing=(text,cstyle)=>{
        return(
            <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#2196f3',
          fontWeight: 500,
          fontSize: `${cstyle.size}rem`,
          marginTop:`${cstyle.cmargin}px`
        }}
        startDelay={100}
        cursorColor="#3f51b5"
        multiText={text}
        multiTextDelay={1000}
        typeSpeed={300}
        
      />
        )
    }
    render(){
        const {loop,text,cstyle}=this.props;
        return(
            <p>
            {
               
            
           this.typing(text,cstyle)} 
           </p>
        )
    }
}
export default Typing;