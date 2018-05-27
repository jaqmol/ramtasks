import {
  vnode,
} from 'ramtastic'
import "@material/top-app-bar/mdc-top-app-bar.scss"
import { MDCTopAppBar } from '@material/top-app-bar'
import './header.css'

const initTopBarHook = {hook: {insert: vnode => new MDCTopAppBar(vnode.elm)}}

const header = vnode(
  'header.mdc-top-app-bar.mdc-top-app-bar--dense.mdc-top-app-bar--fixed.rt-header',
  initTopBarHook,
  vnode(
    'div.mdc-top-app-bar__row', {},
    vnode(
      'section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start', {},
      [
        vnode('a.material-icons.mdc-top-app-bar__navigation-icon', {}, 'menu'),
        vnode('span.mdc-top-app-bar__title', {}, 'ramtasks'),
      ]
    )
  )
)

export default header
