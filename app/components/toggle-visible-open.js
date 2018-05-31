import {
  vnode,
} from 'ramtastic'
import {
  pipe,
  always,
  ifElse,
  propEq,
  either,
  objOf,
  prop,
} from 'ramda'

const toggleVisibleOpen = vnode(
  'button.material-icons.mdc-top-app-bar__action-item',
  pipe(
    prop('toggleShow'),
    toggleShow => () => toggleShow('open'),
    objOf('click'),
    objOf('on'),
  ),
  ifElse(
    either(
      propEq('routeName', 'all'),
      propEq('routeName', 'open')
    ),
    always('lens'),
    always('panorama_fish_eye'),
  )
)

export default toggleVisibleOpen
