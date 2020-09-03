import React, {useState} from 'react'
import './Event.css';

function Event() {
    const color = "pink";
    const[bg, setBg] = useState(color);

    const[name, setName]= useState('Click Me');

    const bgChange= ()=>{
        let newbg= "#8e44ad";
        setBg(newbg);

        setName("Ouch!! 😱");
    };

    const bgBack = () =>{
        setBg("pink");
        setName("Ayoo 😡");
    };

    return (
        <>
        <div style = {{backgroundColor: bg}}>
    <button onClick ={bgChange} onDoubleClick = {bgBack}> {name} </button>
        </div>
        </>
    )
}

export default Event
