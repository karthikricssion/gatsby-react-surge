import React from 'react';
import HeaderTextStyle from './header.module.scss'

export default function Header(props) {
    return (
        <h1>
            <p className={HeaderTextStyle.text}>{props.headerText}</p>
        </h1>
    )
}