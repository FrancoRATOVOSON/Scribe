import React from 'react'
import ReactDOM from 'react-dom'
import EditorContainer from './Components/EditorContainer'

import './index.css'

export default function App() {
  return (
    <div className="my-editor">
      <EditorContainer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
