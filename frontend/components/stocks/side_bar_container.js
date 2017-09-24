import { connect } from 'react-redux';
import SideBar from './sidebar';

import { 
    newStockToGraph,
    deleteStock
 } from '../../actions/stocks_actions';

const mapStateToProps = ({ stocks }) => {
    return {
        allStocks: stocks.allStocks
    };
};

const mapDispatchToProps = (dispatch) => ({
    stockToGraph: (stock) => dispatch(newStockToGraph(stock)),
    deleteStock: (stock) => dispatch(deleteStock(stock))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);