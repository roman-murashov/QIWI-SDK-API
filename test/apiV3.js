const API = require('../lib').default;

const key = '59058292';

const qiwiRestApi = new API.QiwiBillsApi(key);

qiwiRestApi.key = key;

const billId = 'fdfvf5';
const refundId = '';
const amount = '';

qiwiRestApi.createPaymentForm(billId).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});



qiwiRestApi.getStatus(billId).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});



qiwiRestApi.cancel(billId).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});


/*qiwiRestApi.refund(billId, refundId, amount).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});



qiwiRestApi.getRefundStatus(billId, refundId).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});*/