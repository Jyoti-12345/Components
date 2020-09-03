import React, {useContext} from 'react'
import { Firstname, Lastname } from '../App'

function ComC() {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return (
            <h1>I am {fname} {lname}</h1>
    )
}

export default ComC
