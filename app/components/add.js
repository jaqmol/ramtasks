import {
  n3,
} from 'ramtastic'
import {
  objOf,
  pipe,
  merge,
} from 'ramda'
import "@material/fab/mdc-fab.scss"
import {
  rippleHook,
} from '../utils'

import './add.css'

const attribs = pipe(
  objOf('click'),
  objOf('on'),
  merge(rippleHook),
)

const add = n3(
  'button.mdc-fab.material-icons.rt-add-btn',
  attribs,
  n3('span.mdc-fab__icon', {}, 'add'),
)

export default add
