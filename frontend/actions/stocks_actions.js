export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCK_TO_GRAPH = 'RECEIVE_STOCK_TO_GRAPH';
export const REMOVE_SINGLE_STOCK = 'REMOVE_SINGLE_STOCK';
export const CURRENTLY_SEARCHING = 'CURRENTLY_SEARCHING';

const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
});

const receiveStockToGraph = (stock) => ({
    type: RECEIVE_STOCK_TO_GRAPH,
    stock
});

const removeSingleStock = (stock) => ({
    type: REMOVE_SINGLE_STOCK,
    stock
});

const currentlySearching = () => ({
    type: CURRENTLY_SEARCHING
});


export const newStock = (company) => dispatch => {
    return(fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=JKGVQCLQFEWRADZR`))
    .then( (resp) => {
        if (resp.ok) {
            return resp.json().then(
                (stock) => {
                    dispatch(receiveStock(stock));
                }
            );
        }
    });
};

export const newStockToGraph = (stock) => dispatch => (
    dispatch(receiveStockToGraph(stock))
);

export const deleteStock = (stock) => dispatch => (
    dispatch(removeSingleStock(stock))
);

export const flipSearch = () => dispatch => (
    dispatch(currentlySearching())
);