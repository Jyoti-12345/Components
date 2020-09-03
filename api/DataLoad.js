import React, { Component } from 'react';

const API = 'https://randomuser.me/api/';

class DataLoad extends Component {    
    constructor(props) {        
        super(props);        
        this.state = {            
            results: [],        
        };    
    }    
    componentDidMount() {        
        fetch(API)            
        .then(response => response.json())            
        .then(data => this.setState({ results: data.results }));    
    }    
    render() {        
        const { results } = this.state;        
        return (            
        <ul className='row'>                
        {results.map(results =>                    
        <li className='column'>                        
        <img src={results.picture.large} alt=' ' />                        
        <p>{results.name.title} {results.name.first}{results.name.last}</p>                        
        <p>{results.gender}</p>                        
        <p>{results.location.street.number}{results.location.street.name}</p>                        
        <p>{results.location.city}</p>                        
        <p>{results.location.state}</p>                        
        <p>{results.location.country}</p>                        
        <p>{results.cell}</p>                     
        </li>                 
        )}             
        </ul>        
        );    
    }} 
export default DataLoad