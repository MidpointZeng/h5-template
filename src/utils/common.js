class Util {
    static getYMDHMS(timestamp) {
        timestamp = Number(timestamp)
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y+ M+ D  + h + m + s;
    }
    static getParams(data) { //传入一个对象，返回query传参
        let urlParams = "?";
        let keys = Object.keys(data);
        keys.forEach((e, i) => {
            urlParams += e + '=' + data[e]
            if (i != keys.length - 1) {
                urlParams += "&";
            }
        })
        return urlParams;
    }
}
export default Util;