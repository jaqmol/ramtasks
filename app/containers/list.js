import {
  default as listComponent
} from '../components/list'
import commence from '../actions/commence'
import conclude from '../actions/conclude'
import change from '../actions/change'
import remove from '../actions/remove'
import update from '../actions/update'
import {
  get,
  path,
} from 'ramtastic'
import {
  pipe,
  always,
  map,
  merge,
  converge,
  propEq,
  prop,
} from 'ramda'

const augmentPredicate = pipe(
  prop('id'),
  propEq('id'),
  taskIsEdited => task => merge(task, {
    isEdited: taskIsEdited(task),
    commence,
    conclude,
    change,
    remove,
    update,
  }),
)

const editedState = always(path('edited'))
const tasksState = always(path('tasks'))
// const routeState = always(path('route'))

const list = converge(
  pipe(map, listComponent),
  [
    pipe(editedState, get, augmentPredicate),
    pipe(tasksState, get),
  ]
)


export default list
