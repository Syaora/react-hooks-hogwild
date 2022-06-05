function Options({ onGreasedHogs, onSortBy }) {
  return (
    <div className="ui five column centered grid">
      <div className="column">
        <div className="ui checkbox">
          <input type="checkbox" name="greased" onChange={(event) => onGreasedHogs(event.target.checked)} />
          <label>Show Only Greased Hogs</label>
        </div>
      </div>
      <select className="ui dropdown" onChange={onSortBy}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Options