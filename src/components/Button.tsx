import { defineComponent } from 'vue'
import { buttonProps } from '../packages/button/src/types/button-type'

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  setup() {
    return () => <h1>我是 button</h1>
  },
})
