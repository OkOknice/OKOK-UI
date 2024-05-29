import { OKButton } from './packages/button'
import { OKIcons } from './packages/icons'

declare module 'vue' {
  export interface GlobalComponents {
    OKButton: typeof OKButton
    OKIcons: typeof OKIcons
  }
}

export {}
