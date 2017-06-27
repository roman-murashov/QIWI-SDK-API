import API from '../lib/qiwi.lib.js';

const qiwiRestApi = new API('59058292');

qiwiRestApi.createCheckoutUrl('test8u4d83uf3948').then(data => {
    console.log('запрос');
    console.log(data);
});