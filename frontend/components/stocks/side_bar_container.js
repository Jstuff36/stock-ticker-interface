import { connect } from 'react-redux';
import SideBar from './sidebar';

const mapStateToProps = ({ stocks }) => {
    return {
        allStocks: stocks.allStocks
    };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);