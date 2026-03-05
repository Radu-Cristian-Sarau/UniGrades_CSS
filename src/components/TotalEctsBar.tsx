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
    <div className="total-ects-bar-container">
      <div className="bar-header">
        <h2>Total ECTS</h2>
      </div>
      <div className="bar-content">
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
      </div>
    </div>
  )
}

export default TotalEctsBar
