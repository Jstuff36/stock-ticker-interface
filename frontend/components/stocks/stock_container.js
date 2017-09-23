import { connect } from 'react-redux';
import DashBoard from './stock_dashboard';

import {
    newStock
} from '../../actions/stocks_actions';

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = (dispatch) => ({
    newStock: (company) => dispatch(newStock(company))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard);