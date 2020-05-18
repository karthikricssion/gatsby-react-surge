import React from "react";
import { Link } from "gatsby";

import Header from '../components/header';

export default function Home() {
    return (
        <div>
            <Link to="/contact/">Contact</Link>
            <Header headerText="Welcome!" />
            <p>Hey, I'am Karthik!</p>
            <img src="https://avatars1.githubusercontent.com/u/1392445?s=460&u=2c62b8b4a591543bb5ada75dc30d578fc0a0f620&v=4" alt="karthik profile" />
        </div>
    )
}
