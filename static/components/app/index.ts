import { Component, Vue } from 'vue-property-decorator'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'

import './index.less';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class App extends Vue {
}

