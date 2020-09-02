import React from 'react';
import {Link} from "react-router-dom";

function Chips() {
    return (
        <div>
            <h1>You got some chips!</h1>
            <br/>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Chips;