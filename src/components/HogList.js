import Hog from "./Hog"

function HogList({ hogs }){
  return (
    <div className="ui three cards hogList">
      {hogs.map((hog, index) => <Hog key={index} hog={hog}/>)}
    </div>
  )
}

export default HogList