import {
  vnode,
} from 'ramtastic'
import "@material/top-app-bar/mdc-top-app-bar.scss"
import { MDCTopAppBar } from '@material/top-app-bar'
import './header.css'
import toggleVisibleOpen from './toggle-visible-open'
import toggleVisibleDone from './toggle-visible-done'

const initTopBarHook = {hook: {insert: vnode => new MDCTopAppBar(vnode.elm)}}
const titleSection = vnode(
  'section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start', {},
  vnode('span.mdc-top-app-bar__title', {}, 'ramtasks'),
)
const controlSection = vnode(
  'section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-end', {},
  [ toggleVisibleOpen, toggleVisibleDone ]
)

const header = vnode(
  'header.mdc-top-app-bar.mdc-top-app-bar--dense.mdc-top-app-bar--fixed.rt-header',
  initTopBarHook,
  vnode('div.mdc-top-app-bar__row', {},
    [ titleSection, controlSection ]
  )
)

export default header
