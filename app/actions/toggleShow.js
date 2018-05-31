import {
  get,
  path,
  navigate,
} from 'ramtastic'
import {
  always,
  pipe,
  propOr,
  ifElse,
  equals,
} from 'ramda'

const toggleShow = routeName => pipe(
  always(path('route')),
  get,
  propOr('all', 'name'),
  ifElse(
    equals(routeName),
    always('all'),
    always(routeName),
  ),
  navigate,
)()

export default toggleShow
