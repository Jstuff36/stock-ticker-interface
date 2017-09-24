import { connect } from 'react-redux';
import DashBoard from './stock_dashboard';

import {
    newStock,
    flipSearch
} from '../../actions/stocks_actions';

const mapStateToProps = ( {stocks} ) => {
    return {
        allStocks: stocks.allStocks,
        stockToGraph: stocks.stockToGraph,
        currentlySearching: stocks.currentlySearching
    };
};

const mapDispatchToProps = (dispatch) => ({
    newStock: (company) => dispatch(newStock(company)),
    flipSearch: () => dispatch(flipSearch())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard);