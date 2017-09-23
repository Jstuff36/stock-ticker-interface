import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
            if (e.keyCode == 13) {
                console.log(e.keyCode);
            }
        };
    }

    sendSearch(query) {
    }


    render() {
        return (
            <div className="navbar-container">
                <div>
                </div>
                <div>
                    <input
                        ref="query"
                        type="text"
                        className="search-bar edit-placeholder"
                        placeholder="Search"
                        onKeyDown={this.updateInput('search')}
                    />
                </div>
            </div>
        );
    }
}

export default NavBar;