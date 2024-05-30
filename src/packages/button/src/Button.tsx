import { defineComponent, toRefs, ref } from 'vue'
import { buttonProps, buttonPropsType } from './types/button-type'

export default defineComponent({
  name: 'OKButton',
  props: buttonProps,
  setup(props: buttonPropsType, { slots, expose }) {
    const {
      type,
      plain,
      round,
      disabled,
      loading,
      icon,
      size,
      cricle,
      block,
      attrType,
    } = toRefs(props)
    const _ref = ref(null)
    const btnClick = () => {
      console.log('btnClick')
    }
    expose({
      btnClick,
      ref: _ref,
    })
    return () => {
      return (
        <button
          class={{
            ['ok-button']: true,
            [`ok-button--${type.value}`]: type.value,
            'is-plain': plain.value,
            'is-round': round.value,
            'is-disabled': disabled.value || loading.value,
            [`ok-button--${size.value}`]: size.value,
            'is-cricle': cricle.value,
            'is-block': block.value,
          }}
          ref={_ref}
          disabled={disabled.value || loading.value}
          type={attrType.value}
        >
          {loading.value && !icon.value ? <OK-Icons icon="spinner" spin /> : ''}
          {icon.value && !loading.value ? <OK-Icons icon={icon.value} /> : ''}
          {slots.default ? <span>{slots.default()}</span> : ''}
        </button>
      )
    }
  },
})
