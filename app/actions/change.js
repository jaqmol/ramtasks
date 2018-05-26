import {
  pipe,
  always,
  converge,
  prop,
  propEq,
  identity,
  map,
  ifElse,
  __,
  tap,
  merge,
} from 'ramda'
import {
  get,
  set,
  path,
} from 'ramtastic'
import { putTask } from '../db'

const p = path('tasks')

const mergeAndSaveTask = v => ifElse(
  propEq('id', prop('id', v)),
  pipe(
    merge(__, v),
    tap(putTask),
  ),
  identity,
)

const change = converge(
  pipe(map, set(p)),
  [
    mergeAndSaveTask,
    pipe(always(p), get),
  ]
)

export default change
