import React from 'react';
import '../App.css';


export default function Header(props) {
    const {amount} = props //I receive a props called amount
    return (
        <header className="Header">
            <h1>Botanical Concierge</h1>
            <h2>Green-guardian helping {amount} plants from dehydration</h2>
        </header>
    )
}  