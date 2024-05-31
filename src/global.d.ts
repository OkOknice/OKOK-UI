import { OKButton } from './packages/button'
import { OKIcons } from './packages/icons'
import { OKCard } from './packages/card'
import { OKDialog } from './packages/dialog'

declare module 'vue' {
  export interface GlobalComponents {
    OKButton: typeof OKButton
    OKIcons: typeof OKIcons
    OKCard: typeof OKCard
    OKDialog: typeof OKDialog
  }
}

export {}
