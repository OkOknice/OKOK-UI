import { defineComponent, toRefs } from 'vue'
import { IconsPropTypes, IconProps } from './types/icon-type'

export default defineComponent({
  name: 'OKIcons',
  props: IconsPropTypes,
  setup(props: IconProps) {
    const { icon, size, rotation, flip, beat, bounce } = toRefs(props)
    return () => {
      return (
        <div>
          <font-awesome-icon
            size={size.value}
            flip={flip?.value}
            rotation={rotation.value}
            icon={['fas', `${icon.value}`]}
            beat={beat.value}
            bounce={bounce.value}
          />
        </div>
      )
    }
  },
})
