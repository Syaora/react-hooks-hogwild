import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Options from "./Options"

import hogs from "../porkers_data";

function App() {
	const [hogsList, setHogsList] = useState(hogs)
	const [showAll, setShowAll] = useState(false)
	const [sortBy, setSortBy] = useState("name")

	function filterGreasedHogs(value){
		const newList = hogs.filter((hog) => hog.greased || !value)
		setHogsList(hogsList => newList)
		setShowAll((showAll) => !showAll)
	}

	function onSortBy(event){
		const newList = hogs.sort((hog1, hog2) => {
			if (event.target.value === "name"){
				return hog1.name.localeCompare(hog2.name)
			} else return hog1.weight - hog2.weight
		})
		setHogsList(hogsList => newList)
		setSortBy((sortBy) => event.target.value)
	}

	return (
		<div className="ui grid container App">
			<div className="ui sixteen wide column centered">
				<Nav />
			</div>
			<div className="ui sixteen wide column centered">
				<Options onGreasedHogs={filterGreasedHogs} onSortBy={onSortBy} />
			</div>
			<div className="ui sixteen wide column centered">
				<HogList hogs={hogsList} />
			</div>
		</div>
	);
}

export default App;
