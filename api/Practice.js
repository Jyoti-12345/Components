import React, { Component } from 'react'

class Practice extends Component {
    componentDidMount()
    {
        fetch("https://www.google.co.in/")
        .then(res=>{res.json()
        console.log(res);})
    }

 render() {
  return(
   <div></div>
    )
   }
 }


export default Practice;