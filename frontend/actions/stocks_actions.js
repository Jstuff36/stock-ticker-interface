export const RECEIVE_STOCK = 'RECEIVE_STOCK';

const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
});

export const newStock = (company) => dispatch => {
    return(fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&time_period=200&outputsize=compact&apikey=JKGVQCLQFEWRADZR`))
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