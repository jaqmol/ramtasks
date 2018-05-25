import {
  pipe,
  always,
  converge,
  assoc,
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
} from 'ramda'
import {
  get,
  set,
  path,
} from 'ramtastic'
import { putTask } from '../db'

const p = path('tasks')

// const mapOrFilter = (id, v) => ifElse(
//   propSatisfies(isEmpty, 'text', v),
//   filter,
//   map
// )

const mergeAndSaveTask = (id, v) => ifElse(
  propEq('id', id),
  pipe(
    merge(__, v),
    tap(putTask),
  ),
  identity,
)

// const removeTask = id => ifElse(
//   propEq('id', id),
//   pipe(
//     () => console.log('SHOULD DELETE TASK', id),
//     always(F),
//   ),
//   T,
// )

// const chooseMapper = (id, v) => ifElse(
//   propSatisfies(isEmpty, 'text', v),
//   removeTask,
//   mergeAndSaveTask,
// )

const change = curryN(2, pipe(
  // unapply(identity),
  converge(
    pipe(map, set(p)),
    [
      mergeAndSaveTask,
      pipe(always(p), get),
    ]
  ),
))

// const change2 = curryN(2, converge(
//   call,
//   [
//     mapOrFilter,
//     chooseMapper,
//     pipe(always(p), get),
//   ]
// ))

export default change
