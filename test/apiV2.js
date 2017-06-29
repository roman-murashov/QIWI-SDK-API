const API = require('../lib').default;

const prv_id = 481466;
const api_id = '59058292';
const api_password = 'MzAci8yl2NZgmoZDMZRD';

const qiwiRestApi = new API.oldQiwiBillsApi(api_id, api_password, prv_id);

qiwiRestApi.prvId = prv_id;
qiwiRestApi.apiPassword = api_password;
qiwiRestApi.apiId = api_id;

const billId = 'testBillplatieAga';
const refundId = '';
const amount = '';

const fields = {
    amount: 1,
    ccy: 'RUB',
    comment: 'test',
    lifetime: '2017-07-25T09:00:00',
    user: 'tel:+79995611695'
};


qiwiRestApi.createPaymentForm(billId, fields).then(data => {
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