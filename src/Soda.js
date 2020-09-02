import React from 'react';
import {Link} from "react-router-dom";

function Soda() {
    return (
        <div>
            <h1>You got some soda!</h1>
            <br/>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Soda;