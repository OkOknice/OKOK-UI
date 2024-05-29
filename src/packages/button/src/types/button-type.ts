import { PropType, ExtractPropTypes } from 'vue'

// 定义一个类型，用于指定按钮的类型

export type ButtonType = 'primary' | 'secondary' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonAttrType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  disabled: {
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
