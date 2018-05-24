import {
  n3,
} from '../../../ramtastic'
import "@material/top-app-bar/mdc-top-app-bar.scss"
import { MDCTopAppBar } from '@material/top-app-bar'
import './header.css'

const initTopBarHook = {hook: {insert: vnode => new MDCTopAppBar(vnode.elm)}}

const header = n3(
  'header.mdc-top-app-bar.mdc-top-app-bar--dense.mdc-top-app-bar--fixed.rt-header',
  initTopBarHook,
  n3(
    'div.mdc-top-app-bar__row', {},
    n3(
      'section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start', {},
      [
        n3('a.material-icons.mdc-top-app-bar__navigation-icon', {}, 'menu'),
        n3('span.mdc-top-app-bar__title', {}, 'ramtasks'),
      ]
    )
  )
)

export default header
