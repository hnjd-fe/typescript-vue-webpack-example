import Vue from 'vue'
import VueMaterial from 'vue-material';
import iView from 'iview';

import '../../less/common.less'

Vue.use( iView );
Vue.use(VueMaterial);

const LoginComponent =  (require('../../pages/login/item') as any).LoginComponent;

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: '#login',
    computed: {
        viewComponent() {
            return LoginComponent;
        }
    },
    render( h ){ return h(this.viewComponent) }
});

