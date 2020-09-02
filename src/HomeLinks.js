import React from 'react';
import {Link} from "react-router-dom";

function HomeLinks() {
    return (
        <div>
            <Link to="/soda">Soda</Link>
            <br/>
            <Link to="/chips">Chips</Link>
            <br/>
            <Link to="/water">Water</Link>
        </div>
    )
}

export default HomeLinks;