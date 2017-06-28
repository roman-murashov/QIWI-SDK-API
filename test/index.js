import API from '../lib/qiwi.lib.js';

const qiwiRestApi = new API('59058292');

qiwiRestApi.createPaymentForm('test8u4d83uf3948').then(data => {
    console.log(data);
}).catch(error => {
    console.log('Request failed', error);
});;