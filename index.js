import directive from './directive.js'
import component from './component.vue'

/**
 *
 * Vue-touch-ripple
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 */
const vueTouchRipple = {
    touchRipple: component,
    install(Vue) {

        // component
        Vue.component('touch-ripple', component)

        // directive
        Vue.directive('touch-ripple', directive)
    }
}

module.exports = vueTouchRipple
