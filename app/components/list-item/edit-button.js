import {
  n3,
} from '../../../../ramtastic'
import {
  prop,
  props,
  propEq,
  ifElse,
  apply,
  merge,
  pipe,
  objOf,
  append,
  flip,
  always,
  tap,
} from 'ramda'
import {
  rippleHook,
} from '../../utils'

import './edit-button.css'

const flappend = flip(append)

const onClickAction = apply(pipe(
  (action, id) => ev => {
    ev.stopPropagation()
    action(id)
  },
  objOf('click'),
  objOf('on'),
  merge(rippleHook),
))
const attribs = ifElse(
  propEq('isEdited', true),
  pipe(props(['conclude', 'id']), onClickAction),
  pipe(props(['commence', 'id']), onClickAction),
)
const contents = ifElse(
  propEq('isEdited', true),
  n3('i.material-icons.mdc-button__icon', {}, 'check'),
  n3('i.material-icons.mdc-button__icon', {}, 'edit'),
)
const editButton = n3(
  'button.mdc-list-item__meta.mdc-button.rt-item-edit-button',
  attribs,
  contents,
)

export default editButton
