import React from 'react'
import './Greet.css';

function Greet() {
        //new Date(year, month, day, hours, minutes, seconds, milliseconds)

        let currdate = new Date(2020, 27, 5, 6);//u can add day,time,date as u want here like this
        currdate = currdate.getHours();
        
        let greeting = " ";
        
        const cssStyle={ };
        
        if (currdate>=1 && currdate<12) {
          greeting = "Good Morning";
          cssStyle.color="green";
        }
        else if(currdate>=12 && currdate<19){
          greeting = "Good Afternoon";
          cssStyle.color="blue";
        
        }else{
          greeting="Good Night";  
          cssStyle.color="red";
        
        }  
    
    return (
        <div>
        <h1>Hello Jyoti, <span style={cssStyle}>{greeting}</span></h1>
        </div>
      )
}

export default Greet
