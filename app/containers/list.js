import {
  default as listComponent
} from '../components/list'
import commence from '../actions/commence'
import conclude from '../actions/conclude'
import change from '../actions/change'
import remove from '../actions/remove'
import {
  get,
  path,
} from '../../../ramtastic'
import {
  pipe,
  always,
  map,
  merge,
  converge,
  propEq,
} from 'ramda'

const composeAugmentTask = pipe(
  propEq('id'),
  taskIsEdited => task => merge(task, {
    isEdited: taskIsEdited(task),
    commence,
    conclude,
    change,
    remove,
  }),
)

const editedState = always(path('edited'))
const tasksState = always(path('tasks'))

const list = converge(
  pipe(map, listComponent),
  [
    pipe(editedState, get, composeAugmentTask),
    pipe(tasksState, get),
  ]
)


export default list
