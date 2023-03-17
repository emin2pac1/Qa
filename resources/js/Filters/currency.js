import Vue from 'vue'

Vue.filter('currency', function (value) {
    if (!value) return null;

    if (typeof value !== "number") {
        value = parseFloat(value);
    }


    let formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2
    });
    return '$ ' + formatter.format(value);
});

Vue.filter('currency_usd', function (value) {
    if (!value) return null;

    if (typeof value !== "number") {
        value = parseFloat(value);
    }


    let formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2
    });
    return formatter.format(value) + ' USD';
});
