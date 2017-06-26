export default class RestV3 {

    constructor(key) {
        this._key = key;
        this._url = 'api.qiwi.com/api/v3/prv/bills';
    }

    setKey(key) {
        this._key = key;
    }

    requestBuilder({ url, method, body = null }) {

        const headers = {
            'Accept': 'text/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${this._key}`,
        };

        return fetch(url, {
            method,
            headers,
            body
        })
        .then(res => res.json())
        .catch(error => {
            console.log('Request failed', error);
        });
    }


    /*выставление счета
    PUT api.qiwi.com/api/v3/prv/bills/{bill_id}*/
    billing(bill_id) {

        const options = {
            url: `${this._url}/${bill_id}`,
            method: 'PUT'
        };

        return requestBuilder(options);
    }


    /*Запрос статуса счета
    GET api.qiwi.com/api/v3/prv/bills/{bill_id}*/
    requestBillStatus(bill_id) {

        const options = {
            url: `${this._url}/${bill_id}`,
            method: 'GET'
        };

        return requestBuilder(options);
    }

    /*подтверждение или отмена неоплаченного счета
    PATCH api.qiwi.com/api/v3/prv/bills/{bill_id}*/
    cancellingUnpaidBill(bill_id) {
        const options = {
            url: `${this._url}/${bill_id}`,
            method: 'PATCH',
            body: JSON.stringify({
                status: 'rejected'
            })
        };

        return requestBuilder(options);
    }

    /*Возврат средств по оплаченному счету
    PUT api.qiwi.com/api/v3/prv/bills/{bill_id}/refund/{refund_id}*/
    refundByPaidBill(bill_id, refund_id, amount = '') {
        const options = {
            url: `${this._url}/${bill_id}/refund/${refund_id}`,
            method: 'PUT',
            body: JSON.stringify({
                amount
            })
        };

        return requestBuilder(options);
    }

    /*Запрос статуса возврата
    GET api.qiwi.com/api/v3/prv/bills/{bill_id}/refund/{refund_id}*/
    refundStatus(bill_id, refund_id) {
        const options = {
            url: `${this._url}/${bill_id}/refund/${refund_id}`,
            method: 'GET'
        };

        return requestBuilder(options);
    }
}