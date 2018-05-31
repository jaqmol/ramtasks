import {
  vnode,
} from 'ramtastic'
import {
  pipe,
  always,
  ifElse,
  propEq,
  either,
  prop,
  objOf,
} from 'ramda'

const toggleVisibleDone = vnode(
  'button.material-icons.mdc-top-app-bar__action-item',
  pipe(
    prop('toggleShow'),
    toggleShow => () => toggleShow('done'),
    objOf('click'),
    objOf('on'),
  ),
  ifElse(
    either(
      propEq('routeName', 'done'),
      propEq('routeName', 'all')
    ),
    always('check_circle'),
    always('check_circle_outline'),
  )
)

export default toggleVisibleDone
