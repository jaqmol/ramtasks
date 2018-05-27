import {
  initRender,
  queryFn,
  initState,
  set,
  path,
} from 'ramtastic'
import {
  pipeP,
} from 'ramda'
import layout from './containers/layout'
import { getAllTasks } from './db'
import './routing.js'
const p = path('tasks')

const pullTasksFromDb = pipeP(getAllTasks, set(p))

initRender(queryFn('#app'), layout)
initState({
  tasks: [],
  edited: null,
})

pullTasksFromDb()
