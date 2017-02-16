/**
 *
 * Vue-touch-ripple
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 * removed jQuery
 *
 */

var component = require('./component.vue')
var directive = require('./directive.js')

var vueTouchRipple = {
    touchRipple: require('./component.vue'),

    install: function (Vue) {
        // component
        Vue.component('touch-ripple', component)

        // directive
        Vue.directive('touch-ripple', directive)
    }
}

module.exports = vueTouchRipple
