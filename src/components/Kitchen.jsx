import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen()  {
  return (
    <div className="kitchen">
      <h2>Kitchen</h2>
      <div className="appliances"><Oven />
      <Sink />
      </div>
    </div>
  )
}

export default Kitchen