import { ExtractPropTypes } from 'vue'

export const CardProps = {
  width: {
    type: Number,
    default: 300,
  },
  imgHeight: {
    type: Number,
    default: 200,
  },
  summary: {
    type: String,
    default: '',
  },
  imgSrc: {
    type: String,
    required: true,
  },
}

export type CardPropsType = ExtractPropTypes<typeof CardProps>
