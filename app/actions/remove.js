import {
  pipe,
  always,
  converge,
  reject,
  propEq,
  nthArg,
  identity,
  tap,
} from 'ramda'
import {
  get,
  set,
  path,
} from 'ramtastic'
import { removeTask } from '../db'

const p = path('tasks')

const removeFromState = converge(
  pipe(reject, set(p)),
  [
    pipe(nthArg(0), propEq('id')),
    pipe(always(p), get),
  ]
)

const remove = pipe(
  tap(removeFromState),
  removeTask,
)

export default remove
