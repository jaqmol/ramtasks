import {
  vnode,
  path,
} from 'ramtastic'
import {
  prop,
  propEq,
  ifElse,
  path as pathProp,
  when,
  always,
  merge,
  pipe,
  objOf,
  tap,
  converge,
  identity,
  unapply,
  trim,
  last,
} from 'ramda'

import './text.css'

// Events
const preventDefault = tap(ev => ev.preventDefault())
const getTextContent = pipe(pathProp(path('target.textContent')), trim)
const updateEditedText = ({update, id}) => pipe(
  getTextContent,
  objOf('text'),
  merge({id}),
  update,
)
const concludeEditing = ({conclude}) => when(
  propEq('key', 'Enter'),
  pipe(
    preventDefault,
    getTextContent,
    conclude,
  )
)
const editingEvents = converge(
  pipe(merge, objOf('on')),
  [
    pipe(updateEditedText, objOf('input')),
    pipe(concludeEditing, objOf('keypress')),
  ],
)

// View
const focusElement = pipe(
  unapply(identity),
  last,
  prop('elm'),
  e => e.focus(),
)
const textAttribs = ifElse(
  propEq('isEdited', true),
  pipe(
    editingEvents,
    merge({
      props: {contentEditable: 'true'},
      hook: {
        insert: focusElement,
        postpatch: focusElement,
      },
    }),
  ),
  always({
    props: {contentEditable: 'false'},
  }),
)
const text = vnode(
  'div.mdc-list-item__text.rt-item-text',
  textAttribs,
  prop('text'),
)

export default text
