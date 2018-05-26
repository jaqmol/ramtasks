import {
  pipe,
  always,
  tap,
  objOf,
  merge,
  converge,
  propEq,
  find,
  unary,
  identity,
} from 'ramda'
import {
  set,
  path,
  get,
} from 'ramtastic'

const commence = set(path('edited'))

export default commence
