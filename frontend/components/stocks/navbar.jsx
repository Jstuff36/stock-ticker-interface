import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };

        this.updateInput = this.updateInput.bind(this);
        this.sendQuery = this.sendQuery.bind(this);
    }

    updateInput(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
            if (e.keyCode === 13 && field === 'search') {
                this.sendQuery();
                this.props.flipSearch();
            }
        };
    }
    
    sendQuery() {
        this.props.newStock(this.refs.query.value.toUpperCase());
        this.refs.query.value = '';
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
                        placeholder={this.props.currentlySearching ? "Currently Fetching Data" : "Search"}
                        onKeyDown={this.updateInput('search')}
                    />
                </div>
            </div>
        );
    }
}

export default NavBar;