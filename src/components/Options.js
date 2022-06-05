function Options(props) {
  return (
    <div className="ui five column centered grid">
      <div className="column">
        <div className="ui checkbox">
          <input type="checkbox" name="greased" checked={props.showGreased} onChange={props.onShowGreased} />
          <label>Show Only Greased Hogs</label>
        </div>
      </div>
      <select className="ui dropdown" value={props.sortBy} onChange={props.onSortBy}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Options