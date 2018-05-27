import {
  vnode,
  path,
  get,
} from 'ramtastic'
import {
  always,
  isNil,
  not,
  objOf,
  pipe,
} from 'ramda'
import list from './list'
import add from './add'
import header from '../components/header'

import './layout.css'

const editedState = always(path('edited'))
const editedNotNull = pipe(editedState, get, isNil, not)
const attribs = pipe(editedNotNull, objOf('rt-in-edit'), objOf('class'))

const layout = vnode(
  'div.rt-layout',
  attribs,
  [
    header,
    list,
    add,
  ]
)

export default layout
