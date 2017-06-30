const API = require('../lib');

const prv_id = 481466;
const api_id = '59058292';
const api_password = 'MzAci8yl2NZgmoZDMZRD';

const qiwiRestApi = new API.oldQiwiBillsApi(prv_id, api_id, api_password);

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

describe('qiwi api v2', function() {
    it('creates payment form', function(done) {
        qiwiRestApi.createPaymentForm(billId, fields).then(data => {
            console.log(data);
            // TODO assert
            done();
        });
    });

    it('returns valid bill status', function(done) {
        qiwiRestApi.getStatus(billId).then(data => {
            console.log(data);
            // TODO assert
            done();
        });
    });

    it('cancels bill', function(done) {
        qiwiRestApi.cancel(billId).then(data => {
            // TODO assert
            console.log(data);
            done();
        });
    });
});

/*qiwiRestApi.refund(billId, refundId, amount).then(data => {
    console.log(data);
});



qiwiRestApi.getRefundStatus(billId, refundId).then(data => {
    console.log(data);
});*/