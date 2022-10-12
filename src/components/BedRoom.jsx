function BedRoom(props) {
  return (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <h3>BedRoom {props.bedNum}</h3>
    </div>
  )
}

export default BedRoom