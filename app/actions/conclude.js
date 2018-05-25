import {
  pipe,
  always,
  tap,
} from 'ramda'
import {
  set,
  path,
} from 'ramtastic'

const p = path('edited')

const conclude = pipe(
  always(null),
  // tap(() => { console.log('conclude ...') }),
  set(p),
  // tap(arg => { console.log('... concluded:', arg) }),
)

export default conclude
