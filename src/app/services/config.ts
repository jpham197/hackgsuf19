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
            "dateTime": "2019-11-03T00:00:04Z",
            // "dateTime": (new Date()).toISOString().substring(0, 19) + "Z"
        }
    },
    "transactionHeaders": {
        'Accept': 'application/json',
        // 'Accept-Encoding': 'gzip, deflate',
        'Authorization': 'Basic YWNjdDpyb290QGhhY2tfYm9iYWJ1ZGRpZXM6fltWaHskMTwmZw==',
        'Cache-Control': 'no-cache',
        // 'Connection': 'keep-alive',
        // 'Content-Length': '112',
        'Content-Type': 'application/json',
        // 'Cookie': '9e59b60fc083da305b706811d8f0d8f4=c8b198ace4126b0a7402466b56015bc1; 15c150710eb9819a377b7c8a44ed308a=8322d7a6b13ee4c4370f589965927875; c31f2cdf74fd514798400ff59518f162=62e76e4fd4498723eb9b646fc490e40e; aa4ae6177ed52089e6d2e86f3f296937=90272fa1c1ef7e9a594fb29a9aefd995,9e59b60fc083da305b706811d8f0d8f4=c8b198ace4126b0a7402466b56015bc1; 15c150710eb9819a377b7c8a44ed308a=8322d7a6b13ee4c4370f589965927875; c31f2cdf74fd514798400ff59518f162=62e76e4fd4498723eb9b646fc490e40e; aa4ae6177ed52089e6d2e86f3f296937=90272fa1c1ef7e9a594fb29a9aefd995; aa4ae6177ed52089e6d2e86f3f296937=90272fa1c1ef7e9a594fb29a9aefd995; 9e59b60fc083da305b706811d8f0d8f4=6b11b61b911198953617a5f3e6937154; 65bb587fc4308abcd7c906f61bbc1495=64004405caca9cd4a597f1f5d70155ba',
        // 'Host': 'gateway-staging.ncrcloud.com',
        'Postman-Token': 'a75c008d-e69b-437c-9bdc-e3138a93dccb,a42af48f-56f2-4c4c-851d-b625d29c5384,257cce50-c33e-4eca-b456-3d720a1a8012',
        // 'User-Agent': 'PostmanRuntime/7.19.0',
        'cache-control': 'no-cache,no-cache',
        'nep-application-key': '8a008d406ddb112d016e2a5109d80091',
        'nep-organization': 'silver-merchant-552532',
        'nep-service-version': '2:1',
    },
    "ordersUrl": "https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/",
    "orderHeaders": {
        'Accept': 'application/json',
        'Authorization': 'Basic YWNjdDpyb290QGhhY2tfYm9iYWJ1ZGRpZXM6fltWaHskMTwmZw==',
        'nep-organization': 'silver-merchant-552532',
        // 'nep-organization': 'ur-hack',
        'nep-service-version': '2:1',
        'nep-application-key': '8a008d406ddb112d016e2a5109d80091'
    }
}