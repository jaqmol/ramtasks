import {
  pipe,
  always,
  converge,
  reject,
  propEq,
  nthArg,
} from 'ramda'
import {
  get,
  set,
  path,
} from '../../../ramtastic'

const p = path('tasks')

const remove = converge(
  pipe(reject, set(p)),
  [
    pipe(nthArg(0), propEq('id')),
    pipe(always(p), get),
  ]
)

export default remove
