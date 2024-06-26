import { PropType, ExtractPropTypes } from 'vue'

// 定义一个类型，用于指定按钮的类型

export type ButtonType =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonAttrType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'text',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  cricle: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  attrType: {
    type: String as PropType<ButtonAttrType>,
    default: 'button',
  },
}

export type buttonPropsType = ExtractPropTypes<typeof buttonProps>
