import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

function FloorPlan()  {
  return (
    <div className="floorplan">
      <Kitchen />
      <LivingRoom />
      <BedRoom bedNum={1}/>
      <BedRoom bedNum={2}/>
      <BedRoom bedNum={3}/>
      <Bath size={'Half'}/>
      <Bath size={'Full'}/>
    </div>
  )
}

export default FloorPlan