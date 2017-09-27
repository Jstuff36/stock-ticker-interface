import React from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
require('highcharts-no-data-to-display')(ReactHighstock.Highcharts)


class StockGraphs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: null
        };

    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        let height = this.getDims();
        this.setState({
            height: height
        });
    }

    getDims = () => {
        let navBarHeight = document.querySelector('.navbar-container').clientHeight;
        let height = window.innerHeight - navBarHeight - 20;
        return(height);
    }

    configGraph = () => {
        let stockToGraph = this.props.stockToGraph;
        let data = [];
        if (stockToGraph) {
            Object.keys(stockToGraph["Time Series (Daily)"]).reverse().forEach((date) => {
                data.push([new Date(date).valueOf(), parseFloat(stockToGraph["Time Series (Daily)"][date]['1. open'])]);
            });
        } else {
            data.push("");
        }
        let config = {
            chart: {
                height: this.state.height,
                style: {
                    fontFamily: 'sans-serif'
                }
            },
            lang: {
                noData: `Select a stock from the side bar or type a ticker in the search bar.`,
            },
            noData: {
                position: {
                    "align": "center",
                    "verticalAlign": "middle",
                },
                style: {
                    fontSize: '18px'
                }
            },
            rangeSelector: {
                selected: 1
            },
            title: {
                text: stockToGraph ? `${stockToGraph["Meta Data"]['2. Symbol']} Stock Price` : 'Stock Price'
            },
            series: [{
                name: stockToGraph ? `${stockToGraph["Meta Data"]['2. Symbol']}` : '',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        };
        return(config);
    }

    render() {
        return (
            <div className="stock-graphs-container">
                <ReactHighstock 
                    config={this.configGraph()}/>
            </div>
        );
    }
}

export default StockGraphs;