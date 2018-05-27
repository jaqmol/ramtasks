import {
  vnode,
} from 'ramtastic'
import {
  prop,
  propEq,
  ifElse,
  always,
  mergeAll,
  pipe,
  unapply,
  objOf,
  converge,
} from 'ramda'
import {
  rippleHook,
} from '../../utils'

import "@material/button/mdc-button.scss"
import "./index.css"

import editButton from './edit-button'
import text from './text'
import checkbox from './checkbox'

const clickEvents = ifElse(
  propEq('isEdited', true),
  always({}),
  pipe(
    ({change, id, done}) => () => {
      change({id, done: !done})
    },
    objOf('click'),
    objOf('on'),
  )
)

const styleClasses = pipe(
  prop('isEdited'),
  objOf('rt-is-edited'),
  objOf('class'),
)

const attribs = converge(
  unapply(mergeAll),
  [
    clickEvents,
    styleClasses,
    always(rippleHook),
  ]
)

const item = vnode(
  'li.mdc-list-item',
  attribs,
  [
    checkbox,
    text,
    editButton,
  ]
)

export default item
