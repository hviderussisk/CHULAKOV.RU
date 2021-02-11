import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import store from './store/redux-store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

ReactDOM.render( <Provider store={store}> <App /> </Provider>, document.getElementById('root'))

reportWebVitals()
