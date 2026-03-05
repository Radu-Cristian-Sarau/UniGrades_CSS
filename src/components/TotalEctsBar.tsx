import './TotalEctsBar.css'
import type { Stats } from '../utils/calculateStats'

interface TotalEctsBarProps {
  stats: Stats
}

export function TotalEctsBar({ stats }: TotalEctsBarProps) {
  const maxECTS = 180
  const currentECTS = stats.totalECTS
  const currentPercentage = (currentECTS / maxECTS) * 100

  return (
    <>
      <div className="bar-label">Total ECTS</div>
      <div className="ects-bar-wrapper">
        <div className="ects-bar">
          <div className="ects-bar-fill" style={{ width: `${currentPercentage}%` }}></div>
        </div>
        <div className="ects-markers">
          <div className="ects-marker ects-marker-min">0</div>
          <div className="ects-marker ects-marker-current" style={{ left: `${currentPercentage}%` }}>{currentECTS}</div>
          <div className="ects-marker ects-marker-max">180</div>
        </div>
      </div>
    </>
  )
}

export default TotalEctsBar
