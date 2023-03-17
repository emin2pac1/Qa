import Vue from 'vue'

Vue.filter('date_time', function (value) {
    return moment(value).format('YYYY MM DD h:mm a');


});

// filter date time seconds
//date format Mon 06 Mar 2017 21:22:23
Vue.filter('date_time_seconds', function (value) {
    return moment(value).format('dddd DD MMMM YYYY - h:mm:ss A');


});

//get time in human readable format
Vue.filter('time_human', function (value) {
    return moment(value).fromNow();
});
