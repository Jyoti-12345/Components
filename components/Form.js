import React, {useState} from 'react';
import './Form.css';



const Form = (props) => {

    const[name, setName] = useState("");
    const [fullname, setFullname] = useState();
    const [lastname, setLastname] = useState();
    const [fulllastname, setFulllastname] = useState();

    const inputEvent = (event) =>{
       setName(event.target.value);
    };

    const onSubmits = (event) =>{
      event.preventDefault();    //this we can write bcoz we use <form> tag and 
      setFullname(name);         // when we submit the page then it is defaultly redirect
      setFulllastname(lastname);     // to refresh the page and this refreshing page prevented using event.preventDefault()                            

    };

   const inputEventTwo=(event) =>{
        setLastname(event.target.value);
    }

  return(
    <div >
    <form onSubmit={onSubmits}>
      <div className="main_div">
           <h1>Hello {fullname} {fulllastname}</h1>

          <input type="text" 
            placeholder="Enter Your Name"
            onChange={inputEvent}
            value={name}
          /><br/>
          <input type="text" 
            placeholder="Enter Your Lastname"
            onChange={inputEventTwo}
            value={lastname}
          /><br/>

          <button type="submit">Submit</button>
      </div>
      </form>
      </div>
    
   )

 }

export default Form