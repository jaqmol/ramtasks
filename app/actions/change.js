import {
  pipe,
  always,
  converge,
  assoc,
  prop,
  propEq,
  propSatisfies,
  useWith,
  identity,
  map,
  filter,
  ifElse,
  __,
  tap,
  unapply,
  merge,
  flip,
  curryN,
  nAry,
  nth,
  append,
  apply,
  applyTo,
  objOf,
  T,
  F,
  cond,
  partial,
  call,
  zipWith,
  isEmpty,
  unary,
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

// const change = curryN(2, pipe(
//   // unapply(identity),
//   converge(
//     pipe(map, set(p)),
//     [
//       mergeAndSaveTask,
//       pipe(always(p), get),
//     ]
//   ),
// ))

const change = pipe(
  tap(console.log),
  converge(
    pipe(map, set(p)),
    [
      mergeAndSaveTask,
      pipe(always(p), get),
    ]
  )
)

export default change
