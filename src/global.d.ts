import { OKButton } from './packages/button'
import { OKIcons } from './packages/icons'
import { OKCard } from './packages/card'
import { OKDialog } from './packages/dialog'
import { OKPager } from './packages/pager'
import { OKCollapse, OKCollaspseItem } from './packages/collapse'

declare module 'vue' {
  export interface GlobalComponents {
    OKButton: typeof OKButton
    OKIcons: typeof OKIcons
    OKCard: typeof OKCard
    OKDialog: typeof OKDialog
    OKPager: typeof OKPager
    OKCollapse: typeof OKCollapse
    OKCollaspseItem: typeof OKCollaspseItem
  }
}

export { }
