import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './static/css/index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
