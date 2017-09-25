import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            fullHistory: false
        };

        this.updateInput = this.updateInput.bind(this);
        this.fullHistory = this.fullHistory.bind(this);
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
        let numDays = this.state.fullHistory ? "full" : "compact";
        this.props.newStock([this.refs.query.value.toUpperCase(), numDays]);
        this.refs.query.value = '';
    }

    fullHistory(click) {
       return () => {
            if (click === "100Days") {
                this.setState({ fullHistory: false });
            } else {
                this.setState({ fullHistory: true });
            }
        };
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="title">
                    Stock Tracker 5000
                </div>
                <div className="description">
                    View the history of your favorite stocks
                </div>
                <div className="query-input-container">
                    <input
                        ref="query"
                        type="text"
                        className="search-bar edit-placeholder"
                        placeholder={this.props.currentlySearching ? "Currently Fetching Data" : "Search by Ticker Symbol"}
                        onKeyDown={this.updateInput('search')}
                    />
                    <div 
                        className={this.state.fullHistory ? "short-days" : "short-days num-days"}
                        onClick={this.fullHistory("100Days")}>
                        100 Days
                    </div>
                    <div 
                        className={this.state.fullHistory ? "all-days num-days" : "all-days"}
                        onClick={this.fullHistory("allDays")}>
                        All Days
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;