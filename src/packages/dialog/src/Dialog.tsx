import { defineComponent, toRefs } from 'vue'
import { DialogProps, DialogPropsTypes } from './types/dialog-type'

export default defineComponent({
  name: 'OKDialog',
  props: DialogProps,
  emits: ['close'],
  setup(props: DialogPropsTypes, { slots, emit }) {
    const { visible, title, width, top } = toRefs(props)

    const closeDialog = () => {
      emit('close')
    }

    return () => (
      <div
        style={{
          display: visible.value ? 'block' : 'none',
        }}
        class={[
          'ok-dialog_wrapper',
          visible.value ? 'dialog-enter-active' : 'dialog-leave-active',
        ]}
      >
        <div
          class="ok-dialog"
          style={{ width: `${width.value}px`, marginTop: top.value }}
        >
          <div class="ok-dialog_header">
            {/* dialog 标题 */}
            <span class="ok-dialog_title">
              {slots.title ? slots.title() : title.value}
            </span>

            {/* 关闭按钮 */}
            <button class="ok-dialog_headerbtn" onClick={closeDialog}>
              <OK-Icons icon="xmark" />
            </button>
          </div>
          <div className="ok-dialog_body">
            {/* dialog 内容 */}
            {slots.default ? slots.default() : null}
          </div>
          {slots.footer ? (
            <div className="ok-dialog_footer"> {slots.footer()}</div>
          ) : null}
        </div>
      </div>
    )
  },
})
