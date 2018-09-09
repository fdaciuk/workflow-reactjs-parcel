import React from 'react'
import { hot } from 'react-hot-loader'
import Main from './main'

const HotExported = () => <Main />

export default hot(module)(HotExported)
