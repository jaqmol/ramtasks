import {
  pipe,
  always,
  converge,
  reject,
  propEq,
  nthArg,
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
  pipe(reject, tap(tsks => console.log(`new tasks: "${tsks.map(t => t.id)}"`)), set(p)),
  [
    pipe(nthArg(0), tap(id => console.log(`removing id ${id}`)), propEq('id')),
    pipe(always(p), get),
  ]
)

const remove = pipe(
  tap(removeFromState),
  removeTask,
)

export default remove
