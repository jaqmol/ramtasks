import {
  pipe,
  always,
  append,
  converge,
  merge,
  objOf,
  tap,
} from 'ramda'
import {
  get,
  set,
  path,
} from 'ramtastic'
import auid from 'auid'

import { putTask } from '../db'

const p = path('tasks')

const add = converge(
  pipe(append, set(p)),
  [
    pipe(
      auid,
      objOf('id'),
      merge({text: 'New Task', done: false}),
      tap(putTask),
    ),
    pipe(always(p), get),
  ]
)

export default add
