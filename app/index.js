import {
  initRender,
  queryFn,
  initState,
  set,
  path,
  initRoute,
} from 'ramtastic'
import {
  pipeP,
} from 'ramda'
import layout from './containers/layout'
import { getAllTasks } from './db'
const tasksPath = path('tasks')
const routePath = path('route')

const pullTasksFromDb = pipeP(getAllTasks, set(tasksPath))

// init rendering and state as first
initRender(queryFn('#app'), layout)
initState({
  tasks: [],
  edited: null,
  route: null,
})
// init routing as last
initRoute(routePath, [
  { name: 'all', path: '/' },
  { name: 'done', path: '/done' },
  { name: 'open', path: '/open' }
])

pullTasksFromDb()
