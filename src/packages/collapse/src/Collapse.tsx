import { defineComponent, toRefs, provide, ref } from 'vue'
import {
  collapseProps,
  CollapsePropsType,
  collapseKey,
} from './types/collapseType'

export default defineComponent({
  name: 'OKCollapse',
  props: collapseProps,
  emits: ['update:modelValue'],
  setup(props: CollapsePropsType, { slots, emit }) {
    const { modelValue, accordion } = toRefs(props)
    const activeNames = ref([...modelValue.value])

    const handlerCollapse = (val: number | string) => {
      let list = [...activeNames.value]

      if (accordion.value) {
        list = list.includes(val) ? [] : [val]
        emit('update:modelValue', [val])
      } else {
        if (list.includes(val)) {
          const index: number = list.indexOf(val)
          // 删除
          list.splice(index, 1)
          emit('update:modelValue', list)
        } else {
          list.push(val)
          emit('update:modelValue', list)
        }
      }
      activeNames.value = list
    }

    provide(collapseKey, {
      activeNames,
      handlerCollapse,
    })
    return () => {
      return (
        <div class="ok-collapse">
          {slots.default ? slots.default() : 'collapse'}
        </div>
      )
    }
  },
})
