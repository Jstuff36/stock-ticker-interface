import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBar/>
        );
    }
}

export default DashBoard;