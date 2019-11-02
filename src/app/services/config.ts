/*

Contains configurations for service related functions

*/
export const config = {
    "getItemsUrl": "http://5dbd051e30411e0014f27227.mockapi.io/getItems",
    "querySpeed": 1000,
    "transactionUrl": "https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/find",
    "transactionBody": {
        "pageSize": 10,
        "fromTransactionDateTimeUtc": {
            "dateTime": "2019-11-01T13:00:04Z"
        }
    }
}