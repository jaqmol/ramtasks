import {
  default as headerComponent
} from '../components/header'
import toggleShow from '../actions/toggleShow'
import {
  pipe,
  always,
  propOr,
  objOf,
  merge,
} from 'ramda'
import {
  get,
  path,
} from 'ramtastic'

const header = pipe(
  always(path('route')),
  get,
  propOr('all', 'name'),
  objOf('routeName'),
  merge({ toggleShow }),
  headerComponent,
)

export default header
