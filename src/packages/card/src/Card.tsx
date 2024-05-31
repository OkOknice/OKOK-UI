import { defineComponent, toRefs } from 'vue'
import { CardPropsType, CardProps } from './types/card-type'

export default defineComponent({
  name: 'OKCard',
  props: CardProps,
  setup(props: CardPropsType, { slots }) {
    const { imgSrc, width, summary, imgHeight } = toRefs(props)

    // 自定义宽度样式
    const widthStyle = width?.value ? { width: `${width.value}px` } : null
    // 自定义图片高度样式
    const imgHrightStyle = imgHeight?.value
      ? { height: `${imgHeight.value}px` }
      : null

    return () => {
      return (
        <div class="ok-card" style={widthStyle}>
          <div className="ok-card-img" style={imgHrightStyle}>
            <img src={imgSrc?.value} alt="" />
          </div>
          <div className="ok-card-summary">
            {slots.summary ? slots.summary() : summary?.value}
          </div>
          <div className="ok-card-footer">
            {slots.footer ? slots.footer() : null}
          </div>
        </div>
      )
    }
  },
})
