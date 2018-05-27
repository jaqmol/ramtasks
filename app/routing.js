import {
  path,
  subscribe,
} from 'ramtastic'
import { route } from './router'

const p = path('route')

subscribe(p, (_, current) => {
  console.log('route', current.name)
})

route(p, [
  { name: 'all', path: '/' },
  { name: 'done', path: '/done' },
  { name: 'open', path: '/open' }
])
