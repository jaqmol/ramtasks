import {
  pipe,
  always,
  tap,
  prop,
  propEq,
  ifElse,
  merge,
  isEmpty,
  unless,
  isNil,
} from 'ramda'
import {
  set,
  get,
  path,
  call,
} from 'ramtastic'
import change from './change'
import remove from './remove'

const conclude = pipe(
  always(path('edited')),
  get,
  unless(
    isNil,
    ifElse(
      pipe(prop('text'), isEmpty),
      pipe(prop('id'), remove),
      change,
    )
  ),
  always(null),
  set(path('edited')),
)

export default conclude
