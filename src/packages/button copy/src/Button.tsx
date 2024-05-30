import { defineComponent, toRefs } from 'vue'
import { buttonProps, buttonPropsType } from './types/button-type'

export default defineComponent({
  name: 'OKButton',
  props: buttonProps,
  setup(props: buttonPropsType, { slots }) {
    const { type, size, disabled, block, attrType } = toRefs(props)
    // 添加 block 样式类
    const blockClass = block.value ? 's-btn--block' : ''

    return () => {
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass}`}
          type={attrType.value}
        >
          {slots.default ? slots.default() : 'OK'}
        </button>
      )
    }
  },
})
