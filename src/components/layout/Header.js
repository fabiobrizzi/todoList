import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

//Variable pour style header

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlignt: 'center',
    padding: '10px'
}

export default Header;