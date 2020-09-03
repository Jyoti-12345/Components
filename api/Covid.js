import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Covid = (props) => {
    const[mydata, setMydata] = useState([]);
    const[id, setId] = useState();

   useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(res=>{console.log(res.data)
        setMydata(res.data)
      })
       .catch((error)=>{console.log(error)})

   },[id]);
  return(
  <>
    <div>
  <h3>Name: {mydata.name}</h3>
  <p>UserName: {mydata.username}</p>
  <p>Email: {mydata.email}</p>
  <p>phone: {mydata.phone}</p>
  
      <select value={id} onChange={e=>setId(e.target.value)}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      </select>

    </div>
  </>
   )

 }

export default Covid