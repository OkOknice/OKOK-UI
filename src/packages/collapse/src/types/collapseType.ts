import { ExtractPropTypes } from 'vue'

export const collapseProps = {
  modelValue: {
    type: Array,
    default: [],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
}

export const collapseItemProps = {
  title: {
    type: String,
    default: '',
  },
  name: {
    type: [String, Number],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export const collapseKey = Symbol('collapseKey')

export type CollapsePropsType = ExtractPropTypes<typeof collapseProps>
export type CollapseItemPropsType = ExtractPropTypes<typeof collapseItemProps>
