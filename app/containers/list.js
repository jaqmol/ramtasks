import {
  default as listComponent
} from '../components/list'
import commence from '../actions/commence'
import conclude from '../actions/conclude'
import change from '../actions/change'
import remove from '../actions/remove'
import update from '../actions/update'
import {
  path,
  getAll,
} from 'ramtastic'
import {
  pipe,
  always,
  converge,
  map,
  merge,
  props,
  prop,
  ifElse,
  isNil,
  apply,
} from 'ramda'

const checkIsEdited = (edited, task) => {
  if (edited) return edited.id === task.id
  return false
}

const checkIsVisible = (route, task) => {
  if (route) {
    if (route.name === 'done') return task.done
    else if (route.name === 'open') return !task.done
  }
  return true
}

const augmentTaskFn = pipe(
  props(['edited', 'route']),
  apply((edited, route) => task => merge(task, {
    isEdited: checkIsEdited(edited, task),
    isVisible: checkIsVisible(route, task),
    commence,
    conclude,
    change,
    remove,
    update,
  })),
)

const list = pipe(
  always({
    edited: path('edited'),
    route: path('route'),
    tasks: path('tasks'),
  }),
  getAll,
  ifElse(
    pipe(prop('tasks'), isNil),
    always(null),
    pipe(
      converge(map, [augmentTaskFn, prop('tasks')]),
      listComponent,
    ),
  ),
)


export default list
