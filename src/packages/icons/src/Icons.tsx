import { defineComponent, toRefs } from 'vue'
import { IconsPropTypes, IconProps } from './types/icon-type'

export default defineComponent({
  name: 'OKIcons',
  props: IconsPropTypes,
  setup(props: IconProps) {
    const { icon, size, rotation, flip, beat, bounce, type, color, spin } =
      toRefs(props)
    return () => {
      return (
        <div class={['ok-icon', `ok-icon--${type.value}`]}>
          <font-awesome-icon
            size={size.value}
            flip={flip?.value}
            rotation={rotation.value}
            icon={['fas', `${icon.value}`]}
            beat={beat.value}
            bounce={bounce.value}
            color={color.value}
            spin={spin.value}
          />
        </div>
      )
    }
  },
})
