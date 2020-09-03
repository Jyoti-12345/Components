import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = ()=>{
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState();
    const [idFromBTnClk, setIdFromBTnClk] = useState();
     
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBTnClk}`)
        .then((res)=>{
            console.log(res);
            setPosts(res.data);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        });
    },[idFromBTnClk]);

    const handleClick = () =>{
        setIdFromBTnClk(id)
    }
    return(
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
              <p>{posts.title}</p>

            {/* <ul>
                {posts.map(post => <li>{post.title}</li>)}
            </ul> */}
        </div>
    );
}
export default DataFetching;