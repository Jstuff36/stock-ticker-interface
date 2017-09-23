export const RECEIVE_STOCK = 'RECEIVE_STOCK';

const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
});

export const newStock = (company) => dispatch => {
    return(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=JKGVQCLQFEWRADZR`)
        .then( (resp) => {
            console.log(resp);
        });
};