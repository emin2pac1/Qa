import Vue from 'vue'

Vue.filter('decimal', function (value) {
    if (typeof value !== "number") {
        value = parseFloat(value);
    }
    let formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2
    });
    return formatter.format(value);
});

Vue.filter('decimal_short', function (value) {
    if (typeof value !== "number") {
        value = parseFloat(value);
    }
    let formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

Vue.filter('to_ks', function (value) {
    // return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value)

    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
        {value: 1e9, symbol: "G"},
        {value: 1e12, symbol: "T"},
        {value: 1e15, symbol: "P"},
        {value: 1e18, symbol: "E"}
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup.slice().reverse().find(function (item) {
        return value >= item.value;
    });
    return item ? (value / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";

});

Vue.filter('byte_to_readable', function (size) {
    var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];

});
