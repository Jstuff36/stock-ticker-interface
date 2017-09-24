import React from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
 

class StockGraphs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: null
        };

        this.configGraph = this.configGraph.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.getDims = this.getDims.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    updateDimensions() {
        let height = this.getDims();
        this.setState({
            height: height
        });
    }

    getDims() {
        let navBarHeight = document.querySelector('.navbar-container').clientHeight;
        let height = window.innerHeight - navBarHeight;
        return(height);
    }

    configGraph() {
        console.log(this.state.height);
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
                height: this.state.height
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