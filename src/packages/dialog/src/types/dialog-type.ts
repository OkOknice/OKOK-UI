import { ExtractPropTypes } from 'vue'

export const DialogProps = {
  // 是否显示
  visible: {
    type: Boolean,
    default: false,
  },
  // 标题
  title: {
    type: String,
    default: '提示',
  },
  // 是否显示取消按钮
  showCancel: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 600,
  },
  top: {
    type: String,
    default: '15vh',
  },
}

export type DialogPropsTypes = ExtractPropTypes<typeof DialogProps>
