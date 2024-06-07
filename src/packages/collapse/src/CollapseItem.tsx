import { defineComponent, inject, computed } from 'vue'
import { toRefs } from 'vue'
import {
  collapseItemProps,
  CollapseItemPropsType,
  collapseKey,
} from './types/collapseType'

export default defineComponent({
  name: 'OKCollapseItem',
  props: collapseItemProps,
  setup(props: CollapseItemPropsType, { slots }) {
    return () => {
      const { title, name, disabled } = toRefs(props)

      const collapseContext: any = inject(collapseKey)

      const isActive = computed(() =>
        collapseContext.activeNames.value.includes(name.value),
      )

      const handlerClick = (val) => {
        if (disabled.value) return
        collapseContext.handlerCollapse(val)
      }

      return (
        <div
          class={{
            ['ok-collapse-item']: true,
            ['is-disabled']: disabled.value,
          }}
        >
          {/* 标题 */}
          <div
            class={{
              ['ok-collapse-item__header']: true,
              ['is-active']: isActive.value,
              ['is-disabled']: disabled.value,
            }}
            onClick={() => handlerClick(name.value)}
          >
            {slots.title ? slots.title() : title.value}
            <OK-icons icon="angle-right" class="header-angle" />
          </div>

          {/* 内容 */}
          <div
            class={{
              ['ok-collapse-item__content']: true,
              ['ok-collapse-item__content__hidden']: !isActive.value,
              ['ok-collapse-item__content__show']: isActive.value,
            }}
          >
            {slots.default ? slots.default() : ''}
          </div>
        </div>
      )
    }
  },
})
