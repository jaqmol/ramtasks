import {
  vnode,
} from 'ramtastic'
import {
  props,
  propEq,
  ifElse,
  apply,
  merge,
  pipe,
  objOf,
} from 'ramda'
import {
  rippleHook,
} from '../../utils'

import './edit-button.css'

const onClickAction = apply(pipe(
  (action, id, text) => ev => {
    ev.stopPropagation()
    action({id, text})
  },
  objOf('click'),
  objOf('on'),
  merge(rippleHook),
))
const attribs = ifElse(
  propEq('isEdited', true),
  pipe(props(['conclude', 'id', 'text']), onClickAction),
  pipe(props(['commence', 'id', 'text']), onClickAction),
)
const contents = ifElse(
  propEq('isEdited', true),
  vnode('i.material-icons.mdc-button__icon', {}, 'check'),
  vnode('i.material-icons.mdc-button__icon', {}, 'edit'),
)
const editButton = vnode(
  'button.mdc-list-item__meta.mdc-button.rt-item-edit-button',
  attribs,
  contents,
)

export default editButton
