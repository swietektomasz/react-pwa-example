import React, { useState } from 'react'
import './main-view.css'

function MainView() {
  const [Score, setScore] = useState(0)

  return (
    <div className="viewContainer">
      <button className="clickCenter" onClick={() => setScore(Score + 1)}>
        Click here!
      </button>
      <div className="score">Clicks: {Score}</div>
    </div>
  )
}

export default MainView
