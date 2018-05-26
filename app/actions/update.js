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

const update = set(path('edited'))

export default update
