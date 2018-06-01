import {
  get as idbGet,
  set as idbSet,
  del as idbDel,
  keys,
} from 'idb-keyval';
import {
  unary,
  binary,
  map,
  pipeP,
  sort,
  ascend,
  identity,
  converge,
  prop,
} from 'ramda'
const get = unary(idbGet)
const set = binary(idbSet)
const del = unary(idbDel)
const allP = ps => Promise.all(ps)

const getAllTasks = pipeP(
  keys,
  sort(ascend(identity)),
  map(get),
  allP,
)

const putTask = converge(
  set,
  [prop('id'), identity],
)

const removeTask = del

export { getAllTasks, putTask, removeTask }
