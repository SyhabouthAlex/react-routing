import React from 'react';
import {Link} from "react-router-dom";

function Water() {
    return (
        <div>
            <h1>You got some water!</h1>
            <br/>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Water;