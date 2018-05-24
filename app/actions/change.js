import {
  pipe,
  always,
  converge,
  assoc,
  propEq,
  useWith,
  identity,
  map,
  ifElse,
  __,
  tap,
  unapply,
  merge,
  flip,
  curryN,
  nth,
  append,
  apply,
  applyTo,
  objOf,
} from 'ramda'
import {
  get,
  set,
  path,
} from '../../../ramtastic'
import { putTask } from '../db'

const p = path('tasks')

const mapTask = ([id, v]) => ifElse(
  propEq('id', id),
  pipe(
    merge(__, v),
    tap(putTask),
  ),
  identity,
)

const change = curryN(2, pipe(
  unapply(identity),
  converge(
    pipe(map, set(p)),
    [
      mapTask,
      pipe(always(p), get),
    ]
  ),
))

export default change
