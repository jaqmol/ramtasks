import { MDCRipple } from '@material/ripple'

const rippleHook = {hook: {insert: vnode => new MDCRipple(vnode.elm)}}

export { rippleHook }
