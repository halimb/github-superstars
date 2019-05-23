import Vue from 'vue'
import ThemeData from '@/mixins/ThemeData';
import StaticAssets from '@/mixins/StaticAssets';
import App from '@/App.vue'

Vue.config.productionTip = false

// Add global mixins
Vue.mixin(ThemeData);
Vue.mixin(StaticAssets);

new Vue({
  render: h => h(App),
}).$mount('#app')