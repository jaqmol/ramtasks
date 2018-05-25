import {
  default as addComponent,
} from '../components/add'
import {
  default as addAction,
} from '../actions/add'
import {
  pipe,
  always,
} from 'ramda'

const add = pipe(
  always(addAction),
  addComponent,
)

export default add
