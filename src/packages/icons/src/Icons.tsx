import { defineComponent, toRefs } from 'vue'
import { IconsPropTypes, IconProps } from './types/icon-type'

export default defineComponent({
  name: 'OKIcons',
  props: IconsPropTypes,
  setup(props: IconProps) {
    const { type } = toRefs(props)
    return () => {
      return (
        <div class={['ok-icon', `ok-icon--${type.value}`]}>
          <font-awesome-icon {...props} />
        </div>
      )
    }
  },
})
