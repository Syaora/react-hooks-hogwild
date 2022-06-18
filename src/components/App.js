import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Options from "./Options"

import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name")
	const copyHogs = [...hogs]

	const displayHogs = copyHogs.filter((hog) => showGreased ? hog.greased : true)
		.sort((hog1, hog2) => {
			if (sortBy === "name"){
				return hog1.name.localeCompare(hog2.name)
			} else return hog1.weight - hog2.weight
		})

	function onShowGreased(){
		setShowGreased(showGreased => !showGreased)
	}

	function onSortBy(event){
		setSortBy(sortBy => event.target.value)
	}

	return (
		<div className="ui grid container App">
			<div className="ui sixteen wide column centered">
				<Nav />
			</div>
			<div className="ui sixteen wide column centered">
				<Options showGreased={showGreased} onShowGreased={onShowGreased} sortBy={sortBy} onSortBy={onSortBy} />
			</div>
			<div className="ui sixteen wide column centered">
				<HogList hogs={displayHogs} />
			</div>
		</div>
	);
}

export default App;
