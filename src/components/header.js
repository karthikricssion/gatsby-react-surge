import React from 'react';
import HeaderTextStyle from './header.module.scss';
import { Link } from 'gatsby';

export default function Header(props) {
    return (
        <h1>
            <Link to='/' className={HeaderTextStyle.text}>
                {props.headerText}
            </Link>
        </h1>
    )
}