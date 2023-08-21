import { Iplayer } from "../interfaces";
import './PlayerDetails.css'
import PerformanceDonutGraph from "../performanceDonutGraph/PerformanceDonutGraph";

export default function PlayerDetails(props: {player: Iplayer}){
 
  const { player } = props
  return (
    <div className="player-details">
      <div className="image">
        <img src="./logo.png" alt="player-img" />
      </div>
      <div className="details">
        <h3>{ player.name }</h3>
        <label>Position: <span>{ player.position}</span></label>
        { player.number && <label >Number: <span>{ player.number }</span></label> }
        { player?.height && <label>Height: <span>{ player.height }</span></label> }
        { player?.handPreference && <label>Hand preference: <span>{ player.handPreference }</span></label> }
      </div>
      <div className="statistics">
        <h3>Statistics</h3>
        <PerformanceDonutGraph stats={ player?.seasonStats } />
      </div>
    </div>
  )
}