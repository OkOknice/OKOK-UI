import { defineComponent, toRefs, computed } from 'vue'
import { PagerPropsType, PagerProps } from './types/pager-type'

export default defineComponent({
  name: 'Pager',
  props: PagerProps,
  emits: ['current-page'],
  setup(props: PagerPropsType, { emit }) {
    const { total, currentPage, pageSize } = toRefs(props)

    // 页码点击
    const pageClick = (page: number) => {
      emit('current-page', page)
    }
    // 上一页点击
    const prevClick = () => {
      if (currentPage.value > 1) {
        emit('current-page', currentPage.value - 1)
      }
    }
    // 下一页点击
    const nextClick = () => {
      if (currentPage.value < total.value) {
        emit('current-page', currentPage.value + 1)
      }
    }

    // 渲染页码
    const renderPage = computed(() => {
      const list: number[] = []
      let pageTop = null // 页码数靠前
      let pageBottom = null // 页面数靠后
      // 页码数靠前的页码渲染
      const itemTopRender = (
        <>
          <a>
            <OK-Icons icon="ellipsis" />
          </a>
          <a onclick={() => pageClick(total.value)}>{total.value}</a>
        </>
      )
      // 页码数靠后的页码渲染
      const itemBottomRender = (
        <>
          <a onclick={() => pageClick(1)}>1</a>
          <a>
            <OK-Icons icon="ellipsis" />
          </a>
        </>
      )
      // 进入该 if 说明总页码数是大于可渲染页面数，无法全部渲染，只能渲染一部分
      // 这里又分为三种情况
      // 当前页比较靠前：[1] 2 3 4 5 ... 20
      // 当前页比较靠中间：1 ... 5 6 [7] 8 9 ... 20
      // 当前页比较靠后：1 ... 16 17 18 19 [20]

      if (total.value > pageSize.value) {
        // 当前页比较靠前 [1] 2 3 4 5 ... 20
        if (currentPage.value <= 5) {
          for (let i = 1; i <= 5; i++) {
            list.push(i)
          }
          pageTop = itemTopRender
        } else if (currentPage.value > total.value - 4) {
          // 当前页比较靠前 1 ... 16 17 18 19 [20]
          for (let i = total.value - 4; i <= total.value; i++) {
            list.push(i)
          }
          pageBottom = itemBottomRender
        } else {
          // 当前页比较靠中间 1 ... 5 6 [7] 8 9 ... 20
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            list.push(i)
          }
          pageBottom = itemBottomRender
          pageTop = itemTopRender
        }
      } else {
        for (let i = 1; i <= total.value; i++) {
          list.push(i)
        }
      }
      const pageItemRender = list.map((item) => (
        <a
          className={item === currentPage.value ? 'active' : ''}
          key={item}
          onClick={() => pageClick(item)}
        >
          {item}
        </a>
      ))

      return (
        <>
          {pageBottom}
          {pageItemRender}
          {pageTop}
        </>
      )
    })

    return () => {
      return (
        <div className="ok-pager">
          {/* 首页和上一页布局 */}
          <a
            className={currentPage.value === 1 ? 'disabled' : ''}
            onclick={() => pageClick(1)}
          >
            首页
          </a>
          <a
            className={currentPage.value === 1 ? 'disabled' : ''}
            onClick={() => prevClick()}
          >
            <OK-Icons icon="angles-left" />
          </a>

          {/* 渲染页码 */}
          {renderPage.value}

          {/* 尾页和下一页布局 */}
          <a
            className={currentPage.value === total.value ? 'disabled' : ''}
            onClick={() => nextClick()}
          >
            <OK-Icons icon="angles-right" />
          </a>
          <a
            className={currentPage.value === total.value ? 'disabled' : ''}
            onclick={() => pageClick(total.value)}
          >
            尾页
          </a>
        </div>
      )
    }
  },
})
