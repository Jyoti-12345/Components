import React, {useState} from 'react';
import './Form.css';

const Complexform = (props) => {
  
    const [fullName, setFullName] = useState(
         { 
          fname:"",
          lname:"",
          email:"",
          phone:""
        });

    const inputEvent = (event) =>{

      //  const value = event.target.value;
      //  const name = event.target.name;
      const{name, value}=event.target;

       setFullName((preValue) =>{
          console.log(preValue.fname);
          return{
            ...preValue,
            [name]:value
          } 
          // if(name=== "fname")
          // {
          //   return{
          //      fname:value,
          //      lname:preValue.lname,
          //      email:preValue.email,
          //      phone:preValue.phone
          //     };
          // }else if (name==="lname")
          // {
          //   return{
          //      fname:preValue.fname,
          //      lname:value,
          //      email:preValue.email,
          //      phone:preValue.phone
          //     };
          // }else if (name==="email")
          // {
          //   return{
          //      fname:preValue.fname,
          //      lname:preValue.lname,
          //      email:value,
          //      phone:preValue.phone
          //     };
          // }else if (name==="phone")
          // {
          //   return{
          //      fname:preValue.fname,
          //      lname:preValue.lname,
          //      email:preValue.email,
          //      phone:value
          //     };
          // }
          
       });
    };

    const onSubmits = (event) =>{
      event.preventDefault(); 
      alert('Form Submitted');  
    };

  return(
    <div >
    <form onSubmit={onSubmits}>
      <div className="main_div">
           <h1>
             Hello {fullName.fname} {fullName.lname}
           </h1>
           <p>{fullName.email}</p>
           <p>{fullName.phone}</p>

          <input type="text" 
            placeholder="Enter Your Name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          /><br/>
          <input type="text" 
            placeholder="Enter Your Lastname"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          /><br/>
           <input type="email" 
            placeholder="Enter Your Email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            autoComplete="off"
          /><br/>
           <input type="number" 
            placeholder="Enter Your Mobile Num"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
          /><br/>

          <button type="submit">Submit</button>
      </div>
      </form>
      </div>
    
   )

 }
export default Complexform;