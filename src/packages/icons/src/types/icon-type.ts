import { ExtractPropTypes } from 'vue'

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
}

export type IconProps = ExtractPropTypes<typeof IconsPropTypes>
