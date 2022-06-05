import { useState } from "react"
import HogDetail from "./HogDetail"

function Hog({ hog }){
  const [showHidden, setShowHidden] = useState(false)

  function onHidden(){
    setShowHidden((showHidden) => !showHidden)
  }

  return (
    <div className="card">
      <div className="image">
        <img src={hog.image} style={{height: 250, "background-size": "contain"}}/>
      </div>
      <div className="content">
        <a className="header">{hog.name}</a>
        {showHidden ? <HogDetail hog={hog} /> : null}
      </div>
      <div className="ui bottom attached button" onClick={onHidden}>
        {showHidden ? "Less Details" : "More Details"}
      </div>
    </div>
  )
}

export default Hog