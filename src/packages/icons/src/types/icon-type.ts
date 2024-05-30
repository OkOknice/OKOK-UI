import { ExtractPropTypes, PropType } from 'vue'

export type IconType = 'primary' | 'info' | 'success' | 'warning' | 'danger'

export const IconsPropTypes = {
  // 图标
  icon: {
    type: String,
    required: true,
    default: 'house',
  },
  // 大小
  size: {
    type: String,
    default: '',
  },
  // 旋转
  rotation: {
    type: [Number, String],
    default: '',
  },
  // 翻转
  flip: {
    type: [Number, String],
  },
  // 下面是动画效果相关的属性
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  type: {
    type: String as PropType<IconType>,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
}

export type IconProps = ExtractPropTypes<typeof IconsPropTypes>
