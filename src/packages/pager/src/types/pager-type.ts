import { ExtractPropTypes, PropType } from 'vue'

export type pageSize = 'small' | 'medium' | 'large'

export const PagerProps = {
  // 当前页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 总页数
  total: {
    type: Number,
    default: 0,
  },
  // 每页显示条数
  pageSize: {
    type: Number,
    default: 10,
  },
  type: {
    type: String,
    default: 'info',
  },
  size: {
    type: String as PropType<pageSize>,
    default: 'medium',
  },
}

export type PagerPropsType = ExtractPropTypes<typeof PagerProps>
