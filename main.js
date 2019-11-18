import Vue from 'vue'
import App from './App'

import zxMenu from './components/menu/zx-menu';
import zxMenuItem from './components/menu/zx-menu-item';
import zxSubmenu from './components/menu/zx-submenu';
Vue.component('zxMenu', zxMenu)
Vue.component('zxMenuItem', zxMenuItem)
Vue.component('zxSubmenu', zxSubmenu)


Vue.prototype.$bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
})