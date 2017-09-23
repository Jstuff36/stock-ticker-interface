export const RECEIVE_STOCK = 'RECEIVE_STOCK';

const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
});

export const newStock = (company) => dispatch => {
    return(fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=JKGVQCLQFEWRADZR`))
        .then( (resp) => {
            if (resp.ok) {
                return resp.json().then(
                    (stock) => {
                        console.log(stock);
                        dispatch(receiveStock(stock));
                    }
                );
            }
        });
};