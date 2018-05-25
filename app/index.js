import {
  initRender,
  queryFn,
  initState,
  set,
  path,
  get,
} from 'ramtastic'
import {
  pipeP,
} from 'ramda'
import auid from 'auid'
import layout from './containers/layout'
import { getAllTasks } from './db'
const p = path('tasks')

const pullTasksFromDb = pipeP(getAllTasks, set(p))

initRender(queryFn('#app'), layout)
initState({
  tasks: [],
  edited: null,
})

pullTasksFromDb()
