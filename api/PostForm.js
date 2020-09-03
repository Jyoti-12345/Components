import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor() {
        super()
    
        this.state = {
             userId:"",
             title:"",
             body:""
        }
    }
    ChangeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    HandleSubmit =(e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response=>{console.log(response)
        }).catch(error=>{console.log("error")})
    }
   
    render() {
        const {userId, title, body} = this.state;
        return (
            <form onSubmit={this.HandleSubmit}>
            <div>
            <input type="text" 
             name="userId"
             value={userId}
             onChange={this.ChangeHandler}
             />
        </div>
        <div>
        <input type="text" 
         name="title"
         value={title}
         onChange={this.ChangeHandler}
         />
         </div>
         <div>
         <input type="text" 
          name="body"
          value={body}
          onChange={this.ChangeHandler}
          />
         </div>
         
         <button type="submit">Submit</button>

            </form>
        )
    }
}

export default PostForm
