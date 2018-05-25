import {
  pipe,
  // always,
  tap,
} from 'ramda'
import {
  set,
  path,
} from 'ramtastic'

const p = path('edited')

const commence = pipe(
  // tap(arg => { console.log('commence ...', arg) }),
  set(p),
  // tap(arg => { console.log('... commenced:', arg) }),
)

export default commence
