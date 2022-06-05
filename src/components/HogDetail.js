function HogDetail({ hog }) {
  return (
    <div className="description">
      <p>
        <strong>Specialty: </strong>{hog.specialty}
      </p>
      <p>
        <strong>Weight: </strong>{hog.weight}
      </p>
      <p>
        <strong>{hog.greased ? "Greased" : "Non-greased"}</strong>
      </p>
      <p>
        <strong>Highest Medal Achieved: </strong>{hog["highest medal achieved"]}
      </p>
    </div>
  )
}

export default HogDetail