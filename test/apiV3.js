const API = require('../lib').default;

const key = '59058292';

const qiwiRestApi = new API.QiwiBillsApi(key);

qiwiRestApi.key = key;

const billId = 'fdfvf5';
const refundId = '';
const amount = '';

qiwiRestApi.createPaymentForm(billId).then(data => {
    console.log(data);
});



qiwiRestApi.getStatus(billId).then(data => {
    console.log(data);
});



qiwiRestApi.cancel(billId).then(data => {
    console.log(data);
});


/*qiwiRestApi.refund(billId, refundId, amount).then(data => {
    console.log(data);
});



qiwiRestApi.getRefundStatus(billId, refundId).then(data => {
    console.log(data);
});*/