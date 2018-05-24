import {
  n3,
  n2,
  path,
} from '../../../../ramtastic'
import {
  map,
  prop,
  props,
  propEq,
  ifElse,
  path as pathProp,
  when,
  always,
  merge,
  mergeAll,
  pipe,
  apply,
  objOf,
  tap,
  converge,
  append,
  identity,
  unapply,
  pick,
  flip,
  // assoc,
  // __,
  last,
} from 'ramda'

import './text.css'

const preventDefault = tap(ev => ev.preventDefault())
const textContent = pathProp(path('target.textContent'))

const editingEvents = pipe(
  props(['change', 'id', 'conclude']),
  apply((change, id, conclude) => when(
    propEq('key', 'Enter'),
    pipe(
      preventDefault,
      textContent,
      objOf('text'),
      change(id),
      conclude,
    )
  )),
  objOf('keypress'),
  objOf('on'),
)

const focusElement = pipe(
  unapply(identity),
  last,
  prop('elm'),
  e => e.focus(),
)

// const hook = assoc(__, focusElement, __)

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
const text = n3(
  'div.mdc-list-item__text.rt-item-text',
  textAttribs,
  prop('text'),
)

export default text
