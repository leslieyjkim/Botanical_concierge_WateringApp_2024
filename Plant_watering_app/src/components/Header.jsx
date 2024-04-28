import React from 'react';



export default function Header(props) {
    const {amount} = props //I receive a props called amount
    return (
        <header className="Header">
            <h1>Botanical Concierge</h1>
            <h2>Green-guardian helping <span style={{ color: '#cfba1d' }}>{amount}</span> plants from dehydration</h2>
        </header>
    )
}  