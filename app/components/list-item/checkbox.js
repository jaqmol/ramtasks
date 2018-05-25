import {
  n3,
} from 'ramtastic'
import {
  propEq,
  ifElse,
  always,
} from 'ramda'

const checkbox = n3(
  'span.mdc-list-item__graphic.material-icons',
  {},
  ifElse(
    propEq('done', true),
    always('check_box'),
    always('check_box_outline_blank'),
  )
)

export default checkbox
