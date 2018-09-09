import React from 'react'
import { render } from 'react-dom'
import HotExported from './hot-exported'

render(
  <HotExported />,
  document.querySelector('[data-js="app"]')
)
