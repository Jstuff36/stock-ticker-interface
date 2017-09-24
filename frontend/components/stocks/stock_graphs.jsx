import React from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
 

class StockGraphs extends React.Component {
    constructor(props) {
        super(props);

        this.configGraph = this.configGraph.bind(this);
    }

    configGraph() {
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