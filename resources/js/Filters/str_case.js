import Vue from 'vue'

Vue.filter('snakeToTitle', function (str) {
    if (str == null) return str;

    //  check if the str has _
    if (str.indexOf('_') === -1) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    return str.split('_').map(function (item) {
        return item.charAt(0).toUpperCase() + item.substring(1);
    }).join(' ');
});
Vue.filter('snakeToSentence', function (str) {
    if (str == null) return str;

    //  check if the str has _
    if (str.indexOf('_') === -1) {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }

    return str.split('_').map(function (item) {
        return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
    }).join(' ');
});
