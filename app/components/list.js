import {
  vnode,
} from 'ramtastic'
import {
  map,
} from 'ramda'

import "@material/list/mdc-list.scss"
import './list.css'

import item from './list-item'

const list = vnode('ul.mdc-list.rt-list', {}, map(item))

export default list
